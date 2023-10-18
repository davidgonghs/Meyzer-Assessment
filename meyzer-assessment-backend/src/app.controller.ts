import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //findCompanysByCountry
  @Get(':country')
  findClients(@Param('country') country: string) {
    return this.appService.findCompanysByCountry(country);
  }

  // //delete company
  // @Delete(':id')
  // deleteCompany(@Param('id') id: string) {
  //   return this.appService.deleteCompany(id);
  // }
}
