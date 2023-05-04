import { AxiosInstance } from "axios";

import AxiosClient from "../client/AxiosClient";
import { RepositoryInterface } from "./Repository.interface";

export default class Repository<T> implements RepositoryInterface<T> {
  private http: AxiosInstance = AxiosClient.getInstance();

  async getAll(path: string, options?: {}): Promise<T> {
    const response = await this.http.get(path, { params: { ...options } });
    return response.data;
  }

  async save(path: string, entity: T): Promise<void> {
    await this.http.post(path, entity);
  }

  async getById(path: string, options?: {}): Promise<T> {
    const response = await this.http.get(path, { params: { ...options } });
    return response.data;
  }

  async delete(path: string): Promise<void> {
    await this.http.delete(path);
  }

  async update(path: string, entity: T): Promise<void> {
    await this.http.put(path, entity);
  }
}
