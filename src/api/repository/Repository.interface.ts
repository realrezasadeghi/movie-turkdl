export interface RepositoryInterface<T> {
  getAll(path: string, options?: {}): Promise<T>;
  save(path: string, entity: T): Promise<void>;
  getById(path: string, options?: {}): Promise<T>;
  delete(path: string): Promise<void>;
  update(path: string, entity: T): Promise<void>;
}
