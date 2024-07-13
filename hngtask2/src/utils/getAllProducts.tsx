import api from '@/api/axios';
import { ProductType } from '@/types';

interface PaginatedProducts {
  data: ProductType[];
  totalPages: number;
}

const getAllProducts = async (page: number = 1): Promise<PaginatedProducts> => {
  try {
    const response = await api.get('/products', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        organization_id: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
        reverse_sort: false,
        size: 10,
        page,
        Appid: process.env.NEXT_PUBLIC_APP_ID,
        Apikey: process.env.NEXT_PUBLIC_API_KEY
      }
    });
    console.log(response.data.items);

    const products = response.data.items;

    const transformedProducts: ProductType[] = products.map((product: any) => ({
      id: product.id,
      title: product.name,
      price: product.current_price[0]?.NGN[0] ?? 0, // Assuming there's a price field; use 0 if not available
      description: product.description ?? '',
      quantity: product.quantity ?? 0, // Assuming there's a quantity field; use 0 if not available
      image: product.photos[0]?.url ?? '' // Assuming there's an image field; use empty string if not available
    }));

    const totalPages = Math.ceil(response.data.total / 10); // Assuming response.data.total gives the total number of products

    return { data: transformedProducts, totalPages };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: [], totalPages: 0 };
  }
};

export default getAllProducts;
