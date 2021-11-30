import { ContactDatabaseRepository } from "../repositories/ContactDatabaseRepositories";
import { IContactRepositories } from "../repositories/IContactRepositories";

class DeleteContactService {

    constructor(private contactRepositories: IContactRepositories | ContactDatabaseRepository) { }

    async execute(id: string): Promise<void> {
        await this.contactRepositories.delete(id);
    }

}


export { DeleteContactService }