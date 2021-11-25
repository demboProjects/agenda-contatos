import { Contact } from "../model/Contact";
import { IContactRepositories } from "../repositories/IContactRepositories";


class ListOneContactService {

    constructor(private contactRepository: IContactRepositories) { }

    execute(id: string): Contact {

        const service = this.contactRepository.findOne(id);

        return service;
    }
}

export { ListOneContactService }