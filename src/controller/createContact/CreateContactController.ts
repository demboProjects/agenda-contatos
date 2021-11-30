import { Request, Response } from "express";
import { CreateContactService } from "../../service/CreateContactService"

type Irequest = {
    name: string
    phone: string
    email: string
}

class CreateContactController {

    constructor(private createContacService: CreateContactService) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, phone, email } = request.body;

        const contact_id = await this.createContacService.execute({ name, phone, email });

        return response.status(201).json({ id: contact_id });
    }
}

export { CreateContactController }