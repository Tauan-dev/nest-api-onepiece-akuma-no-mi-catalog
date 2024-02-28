import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';

export const dataSouce = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [],
});
