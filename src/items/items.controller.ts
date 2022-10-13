import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDetailsDto, ItemDto, UpdateAttributeDTO } from './items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getList() {
    const items = await this.itemsService.getAll();
    return items.map((item) => new ItemDto(item));
  }

  @Get(':itemId')
  async getDetails(@Param('itemId') itemId: number) {
    const item = await this.itemsService.getDetails(itemId);
    if (!item) {
      throw new NotFoundException();
    }
    return new ItemDetailsDto(item);
  }

  @Patch(':itemId/attributes/:attrId')
  async updateAttribute(
    @Param('attrId') attrId: number,
    @Body() updateDto: UpdateAttributeDTO,
  ) {
    return this.itemsService.updateAttribute(attrId, updateDto.value);
  }

  @Delete(':itemId')
  async removeItem(@Param('itemId') itemId: number) {
    return this.itemsService.removeItem(itemId);
  }

  @Post('/restore-all')
  async restoreAll() {
    return this.itemsService.restoreAll();
  }
}
