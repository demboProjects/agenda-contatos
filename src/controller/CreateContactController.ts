import { Request, Response } from "express";
import { CreateContactService } from "../service/CreateContactService"

type Irequest = {
    name: string
    phone: string
    email: string
}

class CreateContactController {

    constructor(private createContacService: CreateContactService) { }

    handle(request: Request, response: Response): Response {

        const { name, phone, email } = request.body;

        this.createContacService.execute({ name, phone, email });

        return response.sendStatus(201);
    }
}

export { CreateContactController }