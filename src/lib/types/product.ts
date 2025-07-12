export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface ProductsState {
    items: Product[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
  }