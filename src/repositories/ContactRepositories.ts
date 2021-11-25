import { Contact } from "../model/Contact";
import { IContactRepositories, IcreateContactsTDO } from "./IContactRepositories"


class ContactRepositories implements IContactRepositories {

    private static INSTACE: ContactRepositories

    private contacts: Contact[];

    private constructor() {
        this.contacts = [];
    }

    findOne(id: string): Contact {
        const contact = this.contacts.find(contact => contact.id === id);

        if (!contact) {
            throw new Error("contact not found");
        }
        return contact
    }

    public static getInstance(): ContactRepositories {

        if (!ContactRepositories.INSTACE) {
            ContactRepositories.INSTACE = new ContactRepositories();
        }

        return ContactRepositories.INSTACE;
    }

    find(): Contact[] {

        return this.contacts
    }
    update(id: string, contact: IcreateContactsTDO): string {

        const contacIndex = this.contacts.findIndex(contact => contact.id === id);

        const updatedContact = { ...this.contacts[contacIndex], ...contact };

        this.contacts[contacIndex] = updatedContact;

        return updatedContact.name;
    }

    delete(id: string): void {

        const contactIndex = this.contacts.findIndex(contact => contact.id === id);

        this.contacts.splice(contactIndex, 1);

    }

    create({ name, email, phone }: IcreateContactsTDO): void {
        const newContact = new Contact();

        Object.assign(newContact, {
            name,
            phone,
            email,
            created_at: new Date(),
            updated_at: ""
        });

        this.contacts.push(newContact);
    }
}


export { ContactRepositories }