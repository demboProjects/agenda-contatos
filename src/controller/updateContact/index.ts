import { ContactRepositories } from "../../repositories/ContactRepositories";
import { UpdateContactService } from "../../service/UpdateContactService";
import { UpdateContactController } from "./UpdateContactController";


const contactRepository = ContactRepositories.getInstance();

const updateContactService = new UpdateContactService(contactRepository);

const updateContactController = new UpdateContactController(updateContactService);


export { updateContactController }