import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Column
  name: string;

  @Column
  job: string;


  @Column
  salary: number;

  @Column
  admin: boolean;
}