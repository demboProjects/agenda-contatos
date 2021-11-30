import { Contact } from "../model/Contact";
import { IContactDatabaseRepositories } from "../repositories/IContactDatabaseRepositories";
import { IContactRepositories } from "../repositories/IContactRepositories";


class ListOneContactService {

    constructor(private contactRepository: IContactRepositories | IContactDatabaseRepositories) { }

    async execute(id: string): Promise<Contact> {

        const service = await this.contactRepository.findOne(id);

        return service;
    }
}

export { ListOneContactService }