import {ScanCommand, ScanCommandInput} from "@aws-sdk/lib-dynamodb";
import docClient from "../client";

const getCompanies = async () => {
    const params: ScanCommandInput = {
        TableName: "Companies"
    };

    const command = new ScanCommand(params);
    return await docClient.send(command);
}

//get Companies by country
const getCompaniesByCountry = async (country: string) => {
    const params: ScanCommandInput = {
        TableName: "Companies",
        FilterExpression: "country = :country",
        ExpressionAttributeValues: {
            ":country": country
        }
    };

    const command = new ScanCommand(params);
    return await docClient.send(command);
}

//export all functions
export default {
    getAllCompany: getCompanies,
    getCompanyByCountry: getCompaniesByCountry
}