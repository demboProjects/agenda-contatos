import { IContactRepositories, IcreateContactsTDO } from "../repositories/IContactRepositories";
import { IContactDatabaseRepositories } from "../repositories/IContactDatabaseRepositories"

interface Irequest {
    name: string
    phone: string
    email: string
}


class CreateContactService {

    constructor(private contactRepositories: IContactRepositories | IContactDatabaseRepositories) {

    }

    async execute({ email, name, phone }: Irequest): Promise<string> {
        const id = await this.contactRepositories.create({ name, email, phone });

        return id!;
    }
}

export { CreateContactService }

