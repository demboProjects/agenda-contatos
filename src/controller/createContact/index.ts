import { ContactDatabaseRepository } from "../../repositories/ContactDatabaseRepositories";
import { ContactRepositories } from "../../repositories/ContactRepositories";
import { CreateContactService } from "../../service/CreateContactService";
import { CreateContactController } from "./CreateContactController";


const contactRepository = ContactRepositories.getInstance();

const contactDatabaseRepository = ContactDatabaseRepository.getInstance();

const createContactService = new CreateContactService(contactDatabaseRepository);

const createContactController = new CreateContactController(createContactService);


export { createContactController }