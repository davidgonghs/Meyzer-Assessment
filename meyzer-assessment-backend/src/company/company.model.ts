//import isOptional, isString, isNumber from 'class-validator';
import { IsOptional, IsString, IsNumber } from 'class-validator';


export class Company {
    @IsString()
    country: string;

    @IsNumber()
    company_id: number;

    @IsString()
    name: string;

    @IsString()
    author: string;

    @IsString()
    address: string;

    //create constructor
    constructor(company_id: number, country: string, name: string, author : string , address: string) {
        this.company_id = company_id;
        this.country = country;
        this.name = name;
        this.author = author;
        this.address = address;
    }
}
