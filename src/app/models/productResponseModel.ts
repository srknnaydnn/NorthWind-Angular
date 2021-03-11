import { Product } from './product';
import { ResponseModel } from './responseModel';
/* 
apiden gelen veri adları */
export interface ProductResponseModel extends ResponseModel {
  data: Product[];
}
