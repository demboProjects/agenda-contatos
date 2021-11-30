import { Request, Response } from "express";
import { Contact } from "../../model/Contact";
import { ListContactsService } from "../../service/ListContactsService";


class ListContactsController {

    constructor(private listContactsService: ListContactsService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const contacts = await this.listContactsService.execute();

        return response.status(200).json(contacts);
    }

}

export { ListContactsController }