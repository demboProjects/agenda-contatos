import { Router } from "express";
import { createContactController } from "../controller/createContact";
import { listContactsController } from "../controller/listContacts";
import { updateContactController } from "../controller/updateContact";
import { deleteContactController } from "../controller/deleteContact";
import { listOneContactController } from "../controller/listOneContact"


const contactRoutes = Router();

contactRoutes.post("/", (request, response) => {
    createContactController.handle(request, response);
});

contactRoutes.get("/", (request, response) => {
    listContactsController.handle(request, response);
});

contactRoutes.get("/:id", (request, response) => {
    listOneContactController.handle(request, response);
});

contactRoutes.put("/:id", (request, response) => {
    updateContactController.handle(request, response);
});

contactRoutes.delete("/:id", (request, response) => {

    deleteContactController.handle(request, response);
});


export { contactRoutes }



