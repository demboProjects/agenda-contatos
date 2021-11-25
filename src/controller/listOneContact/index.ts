import { ContactRepositories } from "../../repositories/ContactRepositories";
import { ListOneContactService } from "../../service/ListOneContactService";
import { ListOneContactController } from "./ListOneContactController";


const contactRepository = ContactRepositories.getInstance();

const listOneContactService = new ListOneContactService(contactRepository);

const listOneContactController = new ListOneContactController(listOneContactService);


export { listOneContactController }