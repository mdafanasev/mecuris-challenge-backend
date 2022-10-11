import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('MECURIS_DB_HOST'),
        port: +configService.get('MECURIS_DB_PORT'),
        username: configService.get('MECURIS_DB_USER'),
        password: configService.get('MECURIS_DB_PASSWORD'),
        database: configService.get('MECURIS_DB_NAME'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
