import { request, Router } from "express";
import { createContactController } from "../controller/createContact"
import { listContactsController } from "../controller/listContacts"

const contactRoutes = Router();

contactRoutes.post("/", (request, response) => {
    createContactController.handle(request, response);
});

contactRoutes.get("/", (request, response) => {
    listContactsController.handle(request, response);
});


export { contactRoutes }



