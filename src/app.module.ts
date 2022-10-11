import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config.schema';
import { DbModule } from './db/db.module';

@Module({
  imports: [ConfigModule.forRoot(configSchema), DbModule],
})
export class AppModule {}
