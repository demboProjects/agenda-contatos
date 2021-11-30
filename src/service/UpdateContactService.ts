import { ContactDatabaseRepository } from "../repositories/ContactDatabaseRepositories";
import { IContactRepositories } from "../repositories/IContactRepositories";

interface Irequest {
    name: string
    phone: string
    email: string
    update_at?: string
}

class UpdateContactService {

    constructor(private contactRepository: IContactRepositories | ContactDatabaseRepository) { }

    async execute(id: string, contact: Irequest): Promise<string> {
        const upadtedContact = await this.contactRepository.update(id, contact);

        return upadtedContact;
    }
}

export { UpdateContactService }