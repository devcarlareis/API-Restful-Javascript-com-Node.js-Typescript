import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customers from '../typeorm/entities/Customers';
import CustumersRepository from '../typeorm/repositories/CustumersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customers> {
    const customersRepository = getCustomRepository(CustumersRepository);
    const emailExists = await customersRepository.findByEmail(email);

    if (!emailExists) {
      throw new AppError('Email address already used');
    }

    const customers = customersRepository.create({
      name,
      email,
    });

    await customersRepository.save(customers);

    return customers;
  }
}

export default CreateCustomerService;
