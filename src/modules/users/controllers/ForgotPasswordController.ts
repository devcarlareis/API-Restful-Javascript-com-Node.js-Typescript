import { Request, Response } from 'express';
import SendForgotPasswordEmailrService from '../services/SendForgotPasswordEmailrService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailrService();

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
