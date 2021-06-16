import RedisCache from '@shared/cache/RedisCache';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/Productsrepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'api-vendas-PRODUCT_LIST',
    );

    if (!products) {
      products = await productRepository.find();

      await redisCache.save('api-vendas-PRODUCT_LIST', products);
    }
    //await redisCache.save('teste', 'teste');
    return products;
  }
}

export default ListProductService;
