import { v4 as uuidV4 } from "uuid";

class Contact {

    id?: string
    name!: string
    phone!: string
    email!: string
    created_at!: Date
    updated_at: Date | undefined

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { Contact }