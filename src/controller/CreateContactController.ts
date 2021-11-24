import { CreateContactService } from "../service/CreateContactService"

interface Irequest {
    name: string
    phone: string
    email: string
}

class CreateContactController {

    constructor(private createContacService: CreateContactService) { }

    handle({ name, email, phone }: Irequest) {
        this.createContacService.execute({ name, phone, email });
    }
}

export { CreateContactController }