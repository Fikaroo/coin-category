import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Coin, CoinExtended, CoinWithCategory } from "../../types";
import { baseUrl } from "../constants";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCoin: builder.query<Coin[], void>({
      query: () => "coin/all",
    }),
    getCoinWithCount: builder.query<Coin[], void>({
      query: () => "coin",
    }),
    getAllCategory: builder.query<Category[], void>({
      query: () => "category/all",
    }),
    getCoinWithId: builder.query<CoinExtended, string | string[] | undefined>({
      query: (id) => `coin/${id}`,
    }),
    getCoinWithCategoryId: builder.query<
      CoinWithCategory[],
      string | string[] | undefined
    >({
      query: (id) => `coin/category/${id}`,
    }),
  }),
});

export const {
  useGetAllCoinQuery,
  useGetAllCategoryQuery,
  useGetCoinWithCountQuery,
  useGetCoinWithIdQuery,
  useGetCoinWithCategoryIdQuery,
} = coinApi;
