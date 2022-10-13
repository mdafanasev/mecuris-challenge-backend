import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './attribute.entity';
import { AttributesRepository } from './attributes.repository';
import { Item } from './item.entity';
import { ItemsController } from './items.controller';
import { ItemsRepository } from './items.repository';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Attribute])],
  controllers: [ItemsController],
  providers: [ItemsRepository, AttributesRepository, ItemsService],
})
export class ItemsModule {}
