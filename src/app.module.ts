import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { UserController } from './users/user.controllers';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'root',
      password : '',
      database: 'test_backend',
      autoLoadEntities: true,
      synchronize: true

    }),
    TypeOrmModule.forFeature([User]),
    NestjsFormDataModule

  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
