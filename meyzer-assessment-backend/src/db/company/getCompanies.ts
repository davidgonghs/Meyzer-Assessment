import {ScanCommand, ScanCommandInput} from "@aws-sdk/lib-dynamodb";
import docClient from "../client";

const getCompanies = async () => {
    const params: ScanCommandInput = {
        TableName: "companies"
    };

    const command = new ScanCommand(params);
    return await docClient.send(command);
}

export default getCompanies;