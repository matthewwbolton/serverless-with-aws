module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message:
        "This is a test of the Lambda function through the serveless-offline API Gateway proxy.",
    }),
  });
};
