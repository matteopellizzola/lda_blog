import { makeAutoObservable } from "mobx";
import api from "../services/api";
import { createContext } from "react";

class ProductStore {
  products = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProducts(ignoreProducts) {
    if (this.products.length === 0 || ignoreProducts) {
      this.loading = true;
      const response = await api.products.loadProducts().then((data) => {
        return data;
      });

      this.products = response;
      this.loading = false;
    }
  }
}

export const productStore = new ProductStore();
export const ProductsStoreContext = createContext(productStore);
