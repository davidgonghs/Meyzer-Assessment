import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  //findCompanysByCountry
  findCompanysByCountry(country: string): string {
    return country;
  }
}
