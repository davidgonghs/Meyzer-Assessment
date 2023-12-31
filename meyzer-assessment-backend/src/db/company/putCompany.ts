//import
import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { Company } from './../../company/company.model';
import docClient from '../client';

//create a new function to update a company
const putCompany = (company: Company) => {
  //create a new instance of the PutCommandInput
  const params: PutCommandInput = {
    TableName: 'Companies',
    Item: {
      country: company.country,
      company_id: company.company_id,
      name: company.name,
      author: company.author,
      address: company.address,
    },
  };

  const command = new PutCommand(params);
  //return the result of the put command
  return docClient.send(command);
};

export default putCompany;
