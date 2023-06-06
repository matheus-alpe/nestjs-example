import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    return {
      message: 'This action adds a new cat',
    };
  }

  findAll() {
    return {
      message: `This action returns all cats`,
    };
  }

  findOne(id: number) {
    return {
      message: `This action returns a #${id} cat`,
    };
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return {
      message: `This action updates a #${id} cat`,
    };
  }

  remove(id: number) {
    return {
      message: `This action removes a #${id} cat`,
    };
  }
}
