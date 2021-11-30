import { ContactDatabaseRepository } from "../../repositories/ContactDatabaseRepositories";
import { ContactRepositories } from "../../repositories/ContactRepositories";
import { DeleteContactService } from "../../service/DeleteContactService";
import { DeleteContactController } from "./DeleteContactController";


const contactRepository = ContactRepositories.getInstance();

const contactDatabaseRepositories = ContactDatabaseRepository.getInstance();

const deleteContactService = new DeleteContactService(contactDatabaseRepositories);

const deleteContactController = new DeleteContactController(deleteContactService);


export { deleteContactController }