import { Request, Response } from "express";
import { UpdateContactService } from "../../service/UpdateContactService";

class UpdateContactController {

    constructor(private updateContactService: UpdateContactService) { }

    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        let contact = request.body
        contact = { ...contact, updated_at: new Date() }
        const updatedContact = this.updateContactService.execute(id, contact);

        return response.status(200).json(updatedContact);

    }
}


export { UpdateContactController }