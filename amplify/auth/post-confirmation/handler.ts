import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
  const command = new AdminAddUserToGroupCommand({
    GroupName: "EVERYONE",
    Username: "41938d4a-c0b1-7012-6fd4-c02106fa66c4",
    UserPoolId: "ap-south-1_DklToJpPz",
  });
  const response = await client.send(command);
  console.log("processed", response.$metadata.requestId);
  return event;
};
