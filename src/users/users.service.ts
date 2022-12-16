import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    /**
     *
     */
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,) {}
    async findOne(_email: string): Promise<any> {
        return this.userRepo.findOne({
            where:{
                email : _email,
            }
        });
      }
}
