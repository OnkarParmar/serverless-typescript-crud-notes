import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: 'eu-central-1'});
const docClient = DynamoDBDocumentClient.from(client);
const notesTable = "NotesTable";
const resource = "arn:aws:dynamodb:eu-central-1:370216338221:table/NotesTable";

export {
    docClient,
    notesTable,
    resource
};
