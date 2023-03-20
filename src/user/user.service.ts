import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
import { userDto } from './DTO/user.dto';
@Injectable()
export class UserService {
    private prisma: PrismaClient = new PrismaClient();

     async getUser(hoTen:string): Promise<userDto[]> {
        return await this.prisma.user.findMany({
            where:{
                name:{
                    contains: hoTen
                }
            }
        });
    }
}
