import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Item } from './item.entity';

export type AttributeType = 'color' | 'visible';

@Entity('attributes')
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['color', 'visible'],
  })
  type: AttributeType;

  @Column()
  name: string;

  @Column()
  hint: string;

  @Column()
  target: string;

  @Column()
  value: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Item, (item) => item.attributes)
  item: Item;
}
