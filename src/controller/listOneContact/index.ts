import { ContactDatabaseRepository } from "../../repositories/ContactDatabaseRepositories";
import { ContactRepositories } from "../../repositories/ContactRepositories";
import { ListOneContactService } from "../../service/ListOneContactService";
import { ListOneContactController } from "./ListOneContactController";


const contactRepository = ContactRepositories.getInstance();

const contactDatabaseRepositoris = ContactDatabaseRepository.getInstance();

const listOneContactService = new ListOneContactService(contactDatabaseRepositoris);

const listOneContactController = new ListOneContactController(listOneContactService);


export { listOneContactController }