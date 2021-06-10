import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomersService';
import DeleteCustomersService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomersService';
import ShowCustomersService from '../services/ShowCustomersService';
import UpdateCustomerService from '../services/UpdateCustomersService';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCostumers = new ListCustomerService();

    const customers = await listCostumers.execute();

    return response.json(customers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomers = new ShowCustomersService();

    const customer = await showCustomers.execute({ id });

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name,
      email,
    });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomersService();

    await deleteCustomer.execute({ id });

    return response.json([]);
  }
}
