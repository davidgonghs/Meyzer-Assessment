//import
import {CreateTableCommand, CreateTableInput} from "@aws-sdk/client-dynamodb";
//import the client
import client from "../client";

//company table params
const companyTableParams : CreateTableInput = {
    TableName: 'Companies',
    KeySchema: [
        { AttributeName: "country", KeyType: "HASH" },
        { AttributeName: "company_id", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
        { AttributeName: "country", AttributeType: "S" },
        { AttributeName: "company_id", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
    },
};

const command = new CreateTableCommand(companyTableParams);
//client send command
client.send(command).then(
    (data) => {
        console.log("Table created", data);
    }).catch(
    (error) => {
        console.error(error);
    });