import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `Get One Movies ${movieId}`;
  }

  @Post()
  create() {
    return 'create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `delete movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `patch movie ${movieId}`;
  }
}
