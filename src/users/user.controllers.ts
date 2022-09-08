import { Body, Controller, Get, Delete, HttpCode, HttpStatus, Param, Post, UseFilters } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { FormDataRequest } from 'nestjs-form-data';
import { EntityNotFoundExceptionFilter } from "./entity-not-found-exception.filter";
import { UserService } from "./user.service";

@Controller('users')
@UseFilters(new EntityNotFoundExceptionFilter)
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async findAall() {
        return {
            data: await this.userService.findAll()
        };
    }

    @Get(':userid')
    async findOne(@Param('userid') userid: string) {
        return  await this.userService.findOne(userid)
      
    }

    @Post()
    @FormDataRequest()
    async create(@Body() data: CreateUserDto) {
        return {
            data: await this.userService.create(data)
        }
    }

    @Delete(':userid')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('userid') userid: string) {
        await this.userService.delete(userid);
    }

   
}