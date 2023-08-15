import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {v4 as uuidv4} from 'uuid';
import { PutCommand, GetCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import {docClient, notesTable} from '../../../environment';

export const createNote: APIGatewayProxyHandlerV2 = async (event) => {
  const data = JSON.parse(event.body);
  const now:number = Date.now();

  const putCommand = new PutCommand({
    TableName: notesTable,
    Item: {
      id : uuidv4(),
      ...data,
      createdAt: now,
      updatedAt: now,
    },
  });
  try {
    const results = await docClient.send(putCommand);
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    } catch (err) {
    console.error(err);
  }
};

export const getNote: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters.id;
  const getCommand = new GetCommand({
    TableName: notesTable,
    Key: {
      "id" : id
    },
  });
  try {
    const results = await docClient.send(getCommand);
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    } catch (err) {
    console.error(err);
  }
};

export const updateNote: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters.id;
  const data = JSON.parse(event.body);
  const updateCommand = new UpdateCommand({
    TableName: notesTable,
    Key: {
      "id" : id
    },
    UpdateExpression: "set content = :content",
    ExpressionAttributeValues: {
      ":content": data.content || null,
    },
    ReturnValues: "ALL_NEW",
  });
  try {
    const results = await docClient.send(updateCommand);
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    } catch (err) {
    console.error(err);
  }
};

export const deleteNote: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters.id;
  const deleteCommand = new DeleteCommand({
    TableName: notesTable,
    Key: {
      "id" : id
    },
  });
  try {
    const results = await docClient.send(deleteCommand);
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    } catch (err) {
    console.error(err);
  }
};