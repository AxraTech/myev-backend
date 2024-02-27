
const databaseConnectionString = 'postgres://wailinhtet.dev:SoQpXif2b5wv@throbbing-feather-10028924.us-west-2.aws.neon.tech/myev_db_3414882\t?options=project%3Dthrobbing-feather-10028924&sslmode=require';
const databaseHost = process.env.DATABASE_SERVER_ADDRESS;
const databaseName = process.env.DATABASE_NAME;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseUsername = process.env.DATABASE_USERNAME;
const smsReferenceId = process.env.SMS_REFERENCE_ID;
const smsSenderName = process.env.SMS_SENDER_NAME;

const jwtSecretKey =
    "Cast from ten bronze cannons, it was unveiled on April 19, 1875, during the centennial celebration of the Battle of Concord";
const jwtExpTime = "7d";

const digitalOceanAccessKeyId = "6ZF5GJGTLMZZZNAST3UG";
const digitalOceanSecretAccessKey =
    "QYf7TF39wapUFAds/hRwL5gWQHuedvLyaowECtLEDoE";

module.exports = {
    digitalOceanAccessKeyId,
    digitalOceanSecretAccessKey,
    databaseConnectionString,
    databaseHost,
    databaseName,
    databasePassword,
    databaseUsername,
    jwtSecretKey,
    jwtExpTime,
    smsReferenceId,
    smsSenderName,
};
