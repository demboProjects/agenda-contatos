import { Request, Response } from "express";
import { ListOneContactService } from "../../service/ListOneContactService";



class ListOneContactController {

    constructor(private listOnecontactService: ListOneContactService) { }

    handle(request: Request, response: Response): Response {

        const { id } = request.params

        const contact = this.listOnecontactService.execute(id);

        return response.status(200).json(contact);

    }
}

export { ListOneContactController }