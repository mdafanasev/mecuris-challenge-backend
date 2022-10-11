import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemDetailsDto, ItemDto } from './items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getList() {
    const items = await this.itemsService.getAll();
    return items.map((item) => new ItemDto(item));
  }

  @Get(':id')
  async getDetails(@Param('id') itemId: number) {
    const item = await this.itemsService.getDetails(itemId);
    if (!item) {
      throw new NotFoundException();
    }
    return new ItemDetailsDto(item);
  }
}
