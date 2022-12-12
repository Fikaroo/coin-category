import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CoinService } from './coin.service';

@Controller('coin')
export class CoinController {
  constructor(private coinService: CoinService) {}

  @Get('all')
  getAll() {
    return this.coinService.getAll();
  }

  @Get()
  getWithCount() {
    return this.coinService.getWithCount(4);
  }

  @Get('/category/:id')
  getWithCategory(@Param('id') id: string) {
    const categoryId = Number(id);
    return this.coinService.getWithCategory(categoryId);
  }

  @Get(':id')
  getWithId(@Param('id') id: string) {
    const coinId = Number(id);
    return this.coinService.getWithId(coinId);
  }
}
