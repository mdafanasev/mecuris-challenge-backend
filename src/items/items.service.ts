import { Injectable } from '@nestjs/common';
import { AttributesRepository } from './attributes.repository';
import { Item } from './item.entity';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(
    private readonly itemsRepository: ItemsRepository,
    private readonly attributesRepository: AttributesRepository,
  ) {}

  getAll(): Promise<Item[]> {
    return this.itemsRepository.getAll();
  }

  getDetails(itemId: number): Promise<Item | null> {
    return this.itemsRepository.getDetails(itemId);
  }

  updateAttribute(attrId: number, newValue: string): Promise<any> {
    return this.attributesRepository.updateAttribute(attrId, newValue);
  }
}
