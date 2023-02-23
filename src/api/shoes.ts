import instance from './instance';
import { Shoes } from '../models/Shoes';

export function getMainCarouselShoes(): Promise<Shoes[]> {
  return instance
    .get(`/products/search?q=shoes&limit=5`)
    .then((response) => response.data.products);
}

export function getMultiCarouselShoes(): Promise<Shoes[]> {
  return instance
    .get(`/products/search?q=shoes&limit=8`)
    .then((response) => response.data.products);
}
