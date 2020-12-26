import { config } from 'dotenv';
config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

export default {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'test',
  synchronize: false,
  logging: false,
  entities: ['src/app/entity/**/*.ts'],
  migrationsTableName: 'typeorm_migrations',
  migrations: ['src/database/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/app/entity',
    migrationsDir: 'src/database/migration',
  },
};
