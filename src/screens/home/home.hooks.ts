import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getBrands } from "./home.services";
import type { TBrand } from "./home.type";

export const useGetBrands = () => {
  return useQuery<TBrand[], Error>({
    queryKey: ["home"],
    queryFn: () => getBrands(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get brands");
    },
    placeholderData: [],
  } as UseQueryOptions<TBrand[], Error, TBrand[]>);
};
