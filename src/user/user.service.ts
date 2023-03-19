import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
import { async } from 'rxjs';
import { userDto } from './DTO/user.dto';
@Injectable()
export class UserService {
    private prisma: PrismaClient = new PrismaClient();

     async getUser(hoTen:string): Promise<userDto[]> {
        return await this.prisma.user.findMany({
            where:{
                full_name:{
                    contains: hoTen
                }
            }
        });
    }
}
