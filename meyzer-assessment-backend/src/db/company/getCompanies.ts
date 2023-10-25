import { ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';
import docClient from '../client';

const getCompanies = async () => {
  const params: ScanCommandInput = {
    TableName: 'Companies',
  };

  const command = new ScanCommand(params);
  const data = await docClient.send(command);
  return data.Items;
};

//get Companies by country
const getCompaniesByCountry = async (country: string) => {
  const params: ScanCommandInput = {
    TableName: 'Companies',
    FilterExpression: 'country = :country',
    ExpressionAttributeValues: {
      ':country': country,
    },
  };

  const command = new ScanCommand(params);
  const data = await docClient.send(command);
  return data.Items;
};

//export all functions
export default {
  getAllCompany: getCompanies,
  getCompanyByCountry: getCompaniesByCountry,
};
