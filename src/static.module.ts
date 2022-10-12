import { Module } from '@nestjs/common';
import {
  ServeStaticModule,
  ServeStaticModuleOptions,
} from '@nestjs/serve-static';
import { join } from 'path';

const STATIC_CONFIG: ServeStaticModuleOptions = {
  rootPath: join(__dirname, '..', 'static'),
  serveRoot: '/static',
};

@Module({
  imports: [ServeStaticModule.forRoot(STATIC_CONFIG)],
  exports: [ServeStaticModule],
})
export class StaticModule {}
