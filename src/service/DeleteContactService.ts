import { IContactRepositories } from "../repositories/IContactRepositories";

class DeleteContactService {

    constructor(private contactRepositories: IContactRepositories) { }

    execute(id: string): void {
        this.contactRepositories.delete(id);
    }

}


export { DeleteContactService }