"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
//import the client
var client_1 = require("../client");
//company table params
var companyTableParams = {
    TableName: 'Companies',
    KeySchema: [
        { AttributeName: "country", KeyType: "HASH" },
        { AttributeName: "company_id", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
        { AttributeName: "country", AttributeType: "S" },
        { AttributeName: "company_id", AttributeType: "N" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
    },
};
var command = new client_dynamodb_1.CreateTableCommand(companyTableParams);
//client send command
client_1.default.send(command).then(function (data) {
    console.log("Table created", data);
}).catch(function (error) {
    console.error(error);
});
