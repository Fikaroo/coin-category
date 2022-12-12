enum Role {
  ADMIN,
  USER,
}

/**
 * Model User
 *
 */
export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  password: string;
  role: Role;
};

/**
 * Model Category
 *
 */
export type Category = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  image: string;
};

/**
 * Model Coin
 *
 */
export type Coin = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  title: string;
  description: string;
  image: string[];
  year: number;
  denomination: string;
  weight: number;
  price: number;
  countryId: number;
  qualityId: number;
  compositionId: number;
  categoryId: number;
};

/**
 * Model Country
 *
 */
export type Country = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
};

/**
 * Model Composition
 *
 */
export type Composition = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
};

/**
 * Model Quality
 *
 */
export type Quality = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
};

/**
 * Model Denomination
 *
 */
export type Denomination = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
};

export type CoinWithCategory = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  title: string;
  description: string;
  image: string[];
  year: number;
  denomination: string;
  weight: number;
  price: number;
  countryId: number;
  qualityId: number;
  compositionId: number;
  categoryId: number;
  category: { name: string };
};

export type CoinExtended = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  title: string;
  description: string;
  image: string[];
  year: number;
  denomination: string;
  weight: number;
  price: number;
  countryId: number;
  issuingCountry: { name: string };
  qualityId: number;
  quality: { name: string };
  compositionId: number;
  composition: { name: string };
  categoryId: number;
};
