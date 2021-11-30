import { Request, Response } from "express";
import { UpdateContactService } from "../../service/UpdateContactService";

class UpdateContactController {

    constructor(private updateContactService: UpdateContactService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        let contact = request.body
        const updatedContact = await this.updateContactService.execute(id, contact);

        return response.status(200).json(updatedContact);

    }
}


export { UpdateContactController }