export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity?: number;
  image: string;
};

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
};
