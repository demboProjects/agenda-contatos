import { Request, Response } from "express";
import { DeleteContactService } from "../../service/DeleteContactService";


class DeleteContactController {

    constructor(private deleteContactService: DeleteContactService) { }

    handle(request: Request, response: Response): Response {
        const { id } = request.params;

        this.deleteContactService.execute(id);

        return response.sendStatus(204);
    }

}

export { DeleteContactController }