import { Router } from "express";
import { createContactController } from "../controller/createContact";
import { listContactsController } from "../controller/listContacts";
import { updateContactController } from "../controller/updateContact"


const contactRoutes = Router();

contactRoutes.post("/", (request, response) => {
    createContactController.handle(request, response);
});

contactRoutes.get("/", (request, response) => {
    listContactsController.handle(request, response);
});

contactRoutes.put("/:id", (request, response) => {
    updateContactController.handle(request, response);
});


export { contactRoutes }



