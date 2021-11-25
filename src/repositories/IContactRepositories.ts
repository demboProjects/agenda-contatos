import { Contact } from "../model/Contact";

interface IcreateContactsTDO {
    name: string
    phone: string
    email: string
    update_at?: string
}

interface IContactRepositories {
    create({ name, email, phone }: IcreateContactsTDO): void
    find(): Contact[]
    findOne(id: string): Contact
    update(id: string, contact: IcreateContactsTDO): string
    delete(id: string): void

}

export { IContactRepositories, IcreateContactsTDO }