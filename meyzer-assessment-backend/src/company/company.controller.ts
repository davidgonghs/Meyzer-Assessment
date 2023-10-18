import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}


  //create company
  @Post()
  insertCompany(
      @Body('country') country: string,
      @Body('name') name: string,
      @Body('author') author: string,
      @Body('address') address: string,
  ){
    const company_id = this.companyService.createCompany(country, name, author, address);
    return {id:company_id};
  }

//   get all company
  @Get()
  getAllCompany() {
    return this.companyService.getAllCompany();
  }

  //get company by country  /company/:country
    @Get(':country')
    getCompanyByCountry(@Param('country') country: string) {
        return this.companyService.getCompanyByCountry(country);
    }



}
