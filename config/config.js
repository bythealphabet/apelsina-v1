import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3002,
  jwtSecret: process.env.JWT_SECRET || "your_secret_key",
  jwtAcountActivation:
    process.env.JWT_ACCOUNT_ACTIVATION || "acount_activation",
  jwtResetPassword: process.env.JWT_RESET_PASSWORD || "reset_password",
  mongoUrl:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    `mongodb://${process.env.IP || "localhost"}:${
      process.env.MONGO_PORT || "27017"
    }/apelsina-db`,
  sendGridKey: process.env.SENDMAIL_API_KEY || "your_sendGrid_key",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "your_google_client_id",
  facebookAppId: process.env.FACEBOOK_APP_ID || "your_facebook_app_id",
  awsAccessKeyId: process.env.AWS_ACCESSKEYID || "aws_access_key_id",
  awsSecretAccessKey: process.env.AWS_SECRETACCESSKEY || "aws_secret_acces_key",
};

export default config;
