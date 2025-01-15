import parallelumAPI from "../../services/parallelum-api.service";
import type { TBrand } from "./home.type";

export const getBrands = async (): Promise<TBrand[]> => {
  try {
    const response = await parallelumAPI.get<TBrand[]>("/v1/carros/marcas");
    return response.data || [];
  } catch (error) {
    console.error("Error get brands:", error);
    throw error;
  }
};
