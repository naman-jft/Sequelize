import { Body, Inject, Injectable } from '@nestjs/common';
import { CreateData } from './dto/create.dto';
import { User } from './user.entity';



@Injectable()
export class DataService {
    constructor(
        @Inject('USER_REPOSITORY')
        private UserRepository: typeof User
    ) { }


    findAll(): Promise<User[]> {
        return this.UserRepository.findAll();
    }

    async remove(id: string): Promise<void> {
        const user = await this.UserRepository.findByPk(id);
        await user.destroy();
    }

    async add(@Body() createData: CreateData): Promise<void> {
        const obj = {
            name: createData.name,
            job: createData.job,
            salary: createData.salary,
            admin: createData.Admin
        }
        await this.UserRepository.create(obj)
    }


    async Update(id: number, @Body() CreateData: CreateData): Promise<User>{

        const obj1 = await this.UserRepository.findByPk(id);
        console.log(CreateData);
        
        await obj1?.update(CreateData);
        return

    }
}
