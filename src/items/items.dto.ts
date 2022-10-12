import { Item } from './item.entity';

export class ItemDto {
  id: number;
  name: string;
  previewUrl: string;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.previewUrl = item.previewUrl;
  }
}

export class ItemDetailsDto {
  id: number;
  name: string;
  modelUrl: string;
  previewUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.modelUrl = item.modelUrl;
    this.previewUrl = item.previewUrl;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
  }
}
