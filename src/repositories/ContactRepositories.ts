import { Contact } from "../model/Contact";
import { IContactRepositories, IcreateContactsTDO } from "./IContactRepositories"


class ContactRepositories implements IContactRepositories {

    private static INSTACE: ContactRepositories

    private contacts: Contact[];

    private constructor() {
        this.contacts = [];
    }

    public static getInstance(): ContactRepositories {

        if (!ContactRepositories.INSTACE) {
            ContactRepositories.INSTACE = new ContactRepositories();
        }

        return ContactRepositories.INSTACE;
    }

    list(): Contact[] {

        return this.contacts
    }
    update(id: string, contact: IcreateContactsTDO): string {

        const contacIndex = this.contacts.findIndex(contact => contact.id === id);

        const updatedContact = { ...this.contacts[contacIndex], ...contact };

        this.contacts[contacIndex] = updatedContact;

        return updatedContact.name;
    }

    delete(id: string): void {
        throw new Error("Method not implemented.");
    }

    create({ name, email, phone }: IcreateContactsTDO): void {
        const newContact = new Contact();

        Object.assign(newContact, {
            name,
            phone,
            email,
            created_at: new Date()
        });

        this.contacts.push(newContact);
    }
}


export { ContactRepositories }