# About

This is just a repo that shows the basics of a Serverless project. Note that it is recommended that we regenerate the project using the Nodejs templates in order to add other things like unit testing.

To be clear, this doc does not go into details about Serverless as tons already exist.

Additionally, you should be able to deploy these functions onto your cloud account by following the documenation.

Note that when these functions are deployed the API Gateway is also created and deployed.

Finally, I have not added the calls to BigChainDB, however, you just need to go into the handler.js file and add the code you want.

Finally, finally, you will be able to run this code in a pipeline like Jenkins for CI/CD and reporting.

# Set Up

Install [Serverless](https://github.com/serverless/serverless)
Learn about [Serverless here](https://serverless.com/framework/)

# One More Thing

Once you deploy the severless application you will see a folder called '.serverless' created. This is where all the cloudformation files will be created and managed. I have added the '.serverless' folder to the '.gitignore' file so this in never stored in the repo.

# Test Locally

One of the nice things about Serverless is that you can run it locally. You can do this using the following:

## Create An Asset
serverless invoke local --function createAsset --path data/create.json

## Get An Asset
serverless invoke local --function getAsset --path data/get.json

## Update An Asset
serverless invoke local --function updateAsset --path data/update.json

## Delete An Asset
serverless invoke local --function deleteAsset --path data/delete.json

# Conclusion

Any questions please let me know.