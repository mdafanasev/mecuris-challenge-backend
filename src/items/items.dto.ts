import { Attribute, AttributeType } from './attribute.entity';
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
  attributes: AttributeDto[];

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.modelUrl = item.modelUrl;
    this.previewUrl = item.previewUrl;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
    this.attributes = item.attributes.map((attr) => new AttributeDto(attr));
  }
}

class AttributeDto {
  id: number;
  type: AttributeType;
  name: string;
  hint: string;
  target: string;
  value: string;
  updatedAt: Date;

  constructor(attribute: Attribute) {
    this.id = attribute.id;
    this.type = attribute.type;
    this.name = attribute.name;
    this.hint = attribute.hint;
    this.target = attribute.target;
    this.value = attribute.value;
    this.updatedAt = attribute.updatedAt;
  }
}

export class UpdateAttributeDTO {
  value: string;
}
