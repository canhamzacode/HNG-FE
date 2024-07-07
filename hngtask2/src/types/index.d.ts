export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity?: number;
};

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
};
