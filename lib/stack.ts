import { Stack, App, StackProps, Duration } from 'aws-cdk-lib';
import { Runtime, Architecture } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class KintoneRestApiClientStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'lambda', {
      runtime: Runtime.NODEJS_18_X,
      architecture: Architecture.ARM_64,
      handler: 'handler',
      entry: 'lambda/index.ts',
      functionName: 'kintone-rest-api-client-function',
      timeout: Duration.seconds(60),
    });
  }
}
