import { ContactRepositories } from "../../repositories/ContactRepositories";
import { CreateContactService } from "../../service/CreateContactService";
import { CreateContactController } from "./CreateContactController";


const contactRepository = ContactRepositories.getInstance();

const createContactService = new CreateContactService(contactRepository);

const createContactController = new CreateContactController(createContactService);


export { createContactController }