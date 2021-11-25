import { ContactRepositories } from "../../repositories/ContactRepositories";
import { DeleteContactService } from "../../service/DeleteContactService";
import { DeleteContactController } from "./DeleteContactController";


const contactRepository = ContactRepositories.getInstance();

const deleteContactService = new DeleteContactService(contactRepository);

const deleteContactController = new DeleteContactController(deleteContactService);


export { deleteContactController }