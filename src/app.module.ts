import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import entity from './typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory: (configservice: ConfigService) =>({
        type:'postgres',
        host: configservice.get('dbhost'),
        port: +configservice.get<number>('dbport'),
        username: configservice.get('dbusername'),
        password: configservice.get('dbpassword'),
        database: configservice.get('dbname'),
        entities: entity,
        synchronize:true
      }),
      inject : [ConfigService],
    }),
    UsersModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
