import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getModels } from "./model.services";
import type { TModel } from "./model.type";

export const useGetModels = (brandCode: string) => {
  return useQuery<TModel[], Error>({
    queryKey: ["model", brandCode],
    queryFn: () => getModels(brandCode),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: !!brandCode,
    onError: () => {
      console.error("An error occurred during get models");
    },
    placeholderData: [],
  } as UseQueryOptions<TModel[], Error, TModel[]>);
};
