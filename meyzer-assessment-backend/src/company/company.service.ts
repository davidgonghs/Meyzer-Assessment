import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {Company} from "./company.model";
//putCompany
import putCompany from '../db/company/putCompany';
import getCompanies from "../db/company/getCompanies";


@Injectable()
export class CompanyService {

    //insert company
    createCompany(country: string, name: string, author : string , address: string): string {
        const id = uuidv4();
        const newCompany =  new Company(id, country, name, author, address);
        console.log(newCompany);
        putCompany(newCompany).then(r => console.log(r));
        return id;
    }

    //get all company
    getAllCompany() {
        return getCompanies();
    }

}
