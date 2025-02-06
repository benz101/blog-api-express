import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "articles" })
export class Article extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  content!: string;
}
