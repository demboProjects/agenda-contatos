import { ContactDatabaseRepository } from "../../repositories/ContactDatabaseRepositories";
import { ContactRepositories } from "../../repositories/ContactRepositories";
import { ListContactsService } from "../../service/ListContactsService";
import { ListContactsController } from "./ListContactsController"



const contactRepository = ContactRepositories.getInstance();

const contactDatabaseRepository = ContactDatabaseRepository.getInstance();

const listContactsService = new ListContactsService(contactDatabaseRepository);

const listContactsController = new ListContactsController(listContactsService);


export { listContactsController }