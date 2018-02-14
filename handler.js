'use strict';

module.exports.getAsset = (event, context, callback) => {
  const id = event.pathParameters.id;
  const message = "Getting the asset: " + id;
  const response = { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };
  callback(null, response);
};



module.exports.createAsset = (event, context, callback) => {
  // get the json: JSON.parse(event.body)
  const response = { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Creating the asset.',
      input: event.body,
    }),
  };
  callback(null, response);
};

module.exports.updateAsset  = (event, context, callback) => {
  // get the json: JSON.parse(event.body)
  const response = { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'X-ASSET-ID': event.pathParameters.id,
    },
    body: 'Updating Asset',
  };
  callback(null, response);
};


module.exports.deleteAsset  = (event, context, callback) => {
  
  const response = { 
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'X-ASSET-ID': event.pathParameters.id,
    },
    body: 'Delete Asset',
  };

  callback(null, response);
};
