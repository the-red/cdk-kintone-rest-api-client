#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { KintoneRestApiClientStack } from '../lib/stack';
import { config } from 'dotenv';

config();

const app = new cdk.App();
const profileName: string = app.node.tryGetContext('profile');
if (!profileName) throw new Error('Invalid profile. Required Command ex) cdk deploy -c profile=test');

const tags = cdk.Tags.of(app);
tags.add('ManagedBy', 'aws-cdk');

const stackProps = {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
};

new KintoneRestApiClientStack(app, 'KintoneRestApiClientStack', stackProps);
