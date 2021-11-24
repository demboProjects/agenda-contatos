import { IContactRepositories, IcreateContactsTDO } from "../repositories/IContactRepositories"

class CreateContactService {

    constructor(private contactRepositories: IContactRepositories) {

    }

    execute({ email, name, phone }: IcreateContactsTDO) {
        this.contactRepositories.create({ name, email, phone });
    }
}

export { CreateContactService }

