import { Contact } from "../model/Contact";

interface IcreateContactsTDO {
    name: string
    phone: string
    email: string
    update_at?: string
}

interface IContactDatabaseRepositories {
    create({ name, email, phone }: IcreateContactsTDO): Promise<string>
    find(): Promise<Contact[]>
    findOne(id: string): Promise<Contact>
    update(id: string, contact: IcreateContactsTDO): Promise<string>
    delete(id: string): Promise<void>

}

export { IContactDatabaseRepositories, IcreateContactsTDO }