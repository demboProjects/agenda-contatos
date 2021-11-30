import { ContactDatabaseRepository } from "../../repositories/ContactDatabaseRepositories";
import { ContactRepositories } from "../../repositories/ContactRepositories";
import { UpdateContactService } from "../../service/UpdateContactService";
import { UpdateContactController } from "./UpdateContactController";


const contactRepository = ContactRepositories.getInstance();

const contactDatabaseRepositories = ContactDatabaseRepository.getInstance()

const updateContactService = new UpdateContactService(contactDatabaseRepositories);

const updateContactController = new UpdateContactController(updateContactService);


export { updateContactController }