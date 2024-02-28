import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('info')
export class Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  power: string;

  @Column()
  description: string;

  @Column()
  img: string;
}
