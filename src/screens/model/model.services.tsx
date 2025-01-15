import parallelumAPI from "../../services/parallelum-api.service";
import type { TModel, TModelResponse } from "./model.type";

export const getModels = async (brandCode: string): Promise<TModel[]> => {
  try {
    const response = await parallelumAPI.get<TModelResponse>(
      `/v1/carros/marcas/${brandCode}/modelos`
    );
    return response.data.modelos || [];
  } catch (error) {
    console.error("Error get brands:", error);
    throw error;
  }
};
