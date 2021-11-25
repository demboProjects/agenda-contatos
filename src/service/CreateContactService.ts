import { IContactRepositories, IcreateContactsTDO } from "../repositories/IContactRepositories"

interface Irequest {
    name: string
    phone: string
    email: string
}


class CreateContactService {

    constructor(private contactRepositories: IContactRepositories) {

    }

    execute({ email, name, phone }: Irequest) {
        this.contactRepositories.create({ name, email, phone });
    }
}

export { CreateContactService }

