import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class Supplier {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsString()
  @Column() location: string;

  @ApiModelProperty()
  @IsString()
  @Column() phone: string;

  // Relation
  @OneToMany(type => Product, product => product.supplier)
  products: Product[];
}