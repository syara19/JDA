import useSWR from "swr";
const fetcher = (url) => fetch(url).then(res => res.json())
export function useProducts(){
  const {data, error, isLoading} = useSWR("https://fakestoreapi.com/products",fetcher)
  return {data, error, isLoading}
}







