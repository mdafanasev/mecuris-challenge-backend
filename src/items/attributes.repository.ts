import { Injectable } from '@nestjs/common';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Attribute } from './attribute.entity';

@Injectable()
export class AttributesRepository extends Repository<Attribute> {
  constructor(private readonly dataSource: DataSource) {
    super(Attribute, dataSource.createEntityManager());
  }

  updateAttribute(attrId: number, newValue: string): Promise<UpdateResult> {
    return this.update({ id: attrId }, { value: newValue });
  }
}
