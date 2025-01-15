import type {
  TModelScreenRouteProp,
  TModelsScreenProp,
} from "../../types/navigation.type";

export type TModel = {
  codigo: string;
  nome: string;
};

export type TModelResponse = {
  modelos: TModel[];
};

export type TModels = {
  navigation: TModelsScreenProp;
  route: TModelScreenRouteProp;
};
