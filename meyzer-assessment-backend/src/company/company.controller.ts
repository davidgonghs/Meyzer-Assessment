import { Controller } from '@nestjs/common';
import { AppService } from "../app.service";

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: AppService) {}

  //findCompanysByCountry
  // @Get(':country')
  // findClients(@Param('country') country: string) {
  //   return this.appService.findCompanysByCountry(country);
  // }

}
