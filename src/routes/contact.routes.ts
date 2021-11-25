import { Router } from "express";
import { createContactController } from "../controller"

const contactRoutes = Router();

contactRoutes.post("/", (request, response) => {
    createContactController.handle(request, response);
});


export { contactRoutes }



