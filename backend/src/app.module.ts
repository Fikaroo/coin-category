import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoinModule } from './coin/coin.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoinModule,
    PrismaModule,
    CategoryModule,
  ],
})
export class AppModule {}
