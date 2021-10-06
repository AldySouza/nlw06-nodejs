import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

// server -> routes -> controller -> service -> repository -> DB...
class CreateUserController {
  async handle(request: Request, response: Response) {

    //pega a requisição
    const { name, email, admin } = request.body;

    //envia para o service
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };