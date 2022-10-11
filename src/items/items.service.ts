import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  getAll(): Promise<Item[]> {
    return this.itemsRepository.getAll();
  }

  getDetails(itemId: number): Promise<Item | null> {
    return this.itemsRepository.getDetails(itemId);
  }
}
