import { ContactRepositories } from "../../repositories/ContactRepositories";
import { ListContactsService } from "../../service/ListContactsService";
import { ListContactsController } from "./ListContactsController"



const contactRepository = ContactRepositories.getInstance();

const listContactsService = new ListContactsService(contactRepository);

const listContactsController = new ListContactsController(listContactsService);


export { listContactsController }