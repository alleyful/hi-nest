import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `search from Year: ${searchYear}`
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `Get One Movies ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `delete movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() patchData) {
    return {
      updateMovie: movieId,
      ...patchData
    };
  }
}
