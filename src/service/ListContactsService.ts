import { Contact } from "../model/Contact";
import { IContactRepositories } from "../repositories/IContactRepositories";
import { IContactDatabaseRepositories } from "../repositories/IContactDatabaseRepositories";


class ListContactsService {

    constructor(private contactRepositories: IContactRepositories | IContactDatabaseRepositories) { }

    async execute(): Promise<Contact[]> {

        const contacts = await this.contactRepositories.find();

        return contacts;
    }
}


export { ListContactsService }