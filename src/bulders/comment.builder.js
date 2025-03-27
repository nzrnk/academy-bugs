import { faker } from "@faker-js/faker"

export class Comment{
    constructor(){
        this.name = faker.person.fullName();
        this.email = faker.internet.email();
    };

    async addComment(){
        this.comment = faker.lorem.text();
        return this;
    };

    async addWebSite(){
        this.webSite = faker.internet.domainName();
        return this;
    };

    async generate(){ 
        return {
            name: this.name,
            email: this.email,
            comment: this.comment,
            website: this.website,
        }
    };
}