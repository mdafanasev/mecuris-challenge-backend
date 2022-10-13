import { Injectable } from '@nestjs/common';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsRepository extends Repository<Item> {
  constructor(private readonly dataSource: DataSource) {
    super(Item, dataSource.createEntityManager());
  }

  getAll(): Promise<Item[]> {
    return this.find({
      where: { isRemoved: false },
    });
  }

  getDetails(itemId: number): Promise<Item | null> {
    return this.findOne({
      where: { id: itemId, isRemoved: false },
      relations: { attributes: true },
    });
  }

  removeItem(itemId: number): Promise<UpdateResult> {
    return this.update({ id: itemId }, { isRemoved: true });
  }

  restoreAll(): Promise<UpdateResult> {
    return this.update({ isRemoved: true }, { isRemoved: false });
  }
}
