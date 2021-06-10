import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customers from '../typeorm/entities/Customers';
import CustumersRepository from '../typeorm/repositories/CustumersRepository';

interface IRequest {
  id: string;
}

class ShowCustomersService {
  public async execute({ id }: IRequest): Promise<Customers> {
    const customerRepository = getCustomRepository(CustumersRepository);

    const customers = await customerRepository.findById(id);

    if (!customers) {
      throw new AppError('Custumer not found.');
    }

    return customers;
  }
}

export default ShowCustomersService;
