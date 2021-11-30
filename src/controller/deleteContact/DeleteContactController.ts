import { Request, Response } from "express";
import { DeleteContactService } from "../../service/DeleteContactService";


class DeleteContactController {

    constructor(private deleteContactService: DeleteContactService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteContactService.execute(id);

        return response.sendStatus(204);
    }

}

export { DeleteContactController }