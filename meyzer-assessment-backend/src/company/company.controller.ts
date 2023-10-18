import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  //findCompanysByCountry
  // @Get(':country')
  // findClients(@Param('country') country: string) {
  //   return this.appService.findCompanysByCountry(country);
  // }
}
