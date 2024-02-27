const {databaseConnectionString} = require("./config");
module.exports = {
    development: {
        client: 'pg',
        connection: {
            connectionString: databaseConnectionString,
            ssl: {
                rejectUnauthorized: false,
            },
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: databaseConnectionString,
            ssl: {
                rejectUnauthorized: false,
            },
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
    }
};
