import { IContactRepositories } from "../repositories/IContactRepositories";

interface Irequest {
    name: string
    phone: string
    email: string
    update_at?: string
}

class UpdateContactService {

    constructor(private contactRepository: IContactRepositories) { }

    execute(id: string, contact: Irequest): string {
        const upadtedContact = this.contactRepository.update(id, contact);

        return upadtedContact;
    }
}

export { UpdateContactService }