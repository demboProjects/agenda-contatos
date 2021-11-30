import { Contact } from "../model/Contact";
import { IContactDatabaseRepositories, IcreateContactsTDO } from "./IContactDatabaseRepositories";
import { dbConnection } from "../database/databaseConnection";


class ContactDatabaseRepository implements IContactDatabaseRepositories {

    private static INSTANCE: ContactDatabaseRepository;

    private constructor() { }

    public static getInstance(): ContactDatabaseRepository {
        if (!ContactDatabaseRepository.INSTANCE) {
            ContactDatabaseRepository.INSTANCE = new ContactDatabaseRepository();
        }

        return ContactDatabaseRepository.INSTANCE;
    }

    async create({ name, email, phone }: IcreateContactsTDO): Promise<string> {

        const script = ` 
                INSERT INTO contact(name, phone, email) 
                VALUES($1, $2, $3)
                RETURNING id
                `
        const values = [name, phone, email];

        const { rows } = await dbConnection.query<{ id: string }>(script, values);

        const { id } = rows[0];

        return id;
    }

    async find(): Promise<Contact[]> {

        const query = `SELECT *FROM contact`;

        const { rows } = await dbConnection.query<Contact>(query);

        return rows || [];
    }

    async findOne(id: string): Promise<Contact> {

        const contact = await this.findBYId(id);

        return contact;
    }

    async findBYName(name: string): Promise<Contact> {

        const query = `
            SELECT * FROM contact 
            WHERE name=$1 
        `

        const values = [name];

        const { rows } = await dbConnection.query<Contact>(query, values);

        const [contact] = rows;

        return contact;
    }


    async findBYId(id: string): Promise<Contact> {
        const query = `
            SELECT * FROM contact 
            WHERE id=$1 
        `

        const values = [id];

        const { rows } = await dbConnection.query<Contact>(query, values);

        const [contact] = rows;

        return contact;
    }

    async update(id: string, contact: IcreateContactsTDO): Promise<string> {

        const responseContact = await this.findBYId(id);


        if (!responseContact) {
            throw new Error("contact not found");
        }


        const oldContact = responseContact;

        const contactUpate = { ...oldContact, ...contact };

        const { name, email, phone } = contactUpate;


        const script = `
            UPDATE contact 
            SET name=$1, email=$2, phone=$3
            WHERE id=$4
            RETURNING id

        `

        const values = [name, email, phone, id]

        const { rows } = await dbConnection.query<{ id: string }>(script, values);

        const [ct_id] = rows;

        return ct_id.id;


    }

    async delete(id: string): Promise<void> {

        const script = `
        DELETE FROM contact
        WHERE id=$1
        `
        const values = [id]

        await dbConnection.query(script, values);


    }


}

export { ContactDatabaseRepository }