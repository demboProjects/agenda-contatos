import { Request, Response } from "express";
import { ListOneContactService } from "../../service/ListOneContactService";



class ListOneContactController {

    constructor(private listOnecontactService: ListOneContactService) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const contact = await this.listOnecontactService.execute(id);

        return response.status(200).json(contact);

    }
}

export { ListOneContactController }