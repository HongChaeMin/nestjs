import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const configuration: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'ghdcoalss33',
  database: 'live-pulse',
  logging: true,
  entities: ['./dist/**/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default configuration;
