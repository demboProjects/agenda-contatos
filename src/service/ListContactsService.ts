import { Contact } from "../model/Contact";
import { IContactRepositories } from "../repositories/IContactRepositories";


class ListContactsService {

    constructor(private contactRepositories: IContactRepositories) { }

    execute(): Contact[] {

        const contacts = this.contactRepositories.find();

        return contacts;
    }
}


export { ListContactsService }