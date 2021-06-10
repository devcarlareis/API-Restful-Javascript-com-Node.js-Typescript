import { EntityRepository, Repository } from 'typeorm';
import Customers from '../entities/Customers';

@EntityRepository(Customers)
class CustumersRepository extends Repository<Customers> {
  public async findByName(name: string): Promise<Customers | undefined> {
    const custumer = await this.findOne({
      where: {
        name,
      },
    });
    return custumer;
  }

  public async findById(id: string): Promise<Customers | undefined> {
    const custumer = await this.findOne({
      where: {
        id,
      },
    });
    return custumer;
  }

  public async findByEmail(email: string): Promise<Customers | undefined> {
    const custumer = await this.findOne({
      where: {
        email,
      },
    });
    return custumer;
  }
}

export default CustumersRepository;
