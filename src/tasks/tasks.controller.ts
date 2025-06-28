import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-taks.dto';
 
@Controller('tasks')
export class TasksController {
    constructor(private readonly service: TasksService) { }
 
    @Get()
    findAll() {
        return this.service.findAll();
    }
 
    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.service.create(dto);
    }
}