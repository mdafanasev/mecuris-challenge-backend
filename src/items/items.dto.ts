import { Item } from './item.entity';

export class ItemDto {
  id: number;
  name: string;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
  }
}

export class ItemDetailsDto {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
  }
}
