import { Injectable } from '@nestjs/common';
import { Coin } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoinService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Coin[]> {
    const coins = await this.prisma.coin.findMany();

    return coins;
  }

  async getWithCount(count: number): Promise<Coin[]> {
    const coins = await this.prisma.coin.findMany({ take: count });

    return coins;
  }

  async getWithCategory(id: number): Promise<any> {
    const coins = await this.prisma.coin.findMany({
      where: {
        categoryId: id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return coins;
  }

  async getWithId(id: number): Promise<Coin> {
    try {
      const coin = await this.prisma.coin.findUnique({
        where: { id: id },
        include: {
          issuingCountry: { select: { name: true } },
          quality: { select: { name: true } },
          composition: { select: { name: true } },
        },
      });
      return coin;
    } catch (error) {
      return error;
    }
  }
}
