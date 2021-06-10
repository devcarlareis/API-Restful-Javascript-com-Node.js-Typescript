import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustumersRepository from '../typeorm/repositories/CustumersRepository';

interface IRequest {
  id: string;
}

class DeleteCustomersService {
  public async execute({ id }: IRequest): Promise<void> {
    const customerRepository = getCustomRepository(CustumersRepository);

    const customers = await customerRepository.findById(id);

    if (!customers) {
      throw new AppError('Custumer not found.');
    }

    await customerRepository.remove(customers);
  }
}

export default DeleteCustomersService;
