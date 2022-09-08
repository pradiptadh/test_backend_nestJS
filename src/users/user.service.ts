import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    findAll() {
        return this.userRepository.find();
    }

    async findOne(userid: string): Promise<User> {
        const user = await this.userRepository.findOne({
               where: { userid }
        });
        if (!user){
                    throw new NotFoundException('userid not found');
                } 
        return user;
    }

    create(data: CreateUserDto) {
        const user = new User();
        user.userid = data.userid;
        user.password = data.password;

        return this.userRepository.save(user);
    }


    delete(userid: string) {
        return this.userRepository.delete(userid)
    }

}