# Staccato Back-End
This project is a basic web API holding song and album information.

## Preparing the project

1. Install dependencies with the `npm install` command.
2. Prepare create a `settings.json` file in the project root, following this structure:

```json
{
    "presentation": {
        "port": 8080 // Web API port
    },
    "persistance": { // MySQL Database Connection Info
        "host": "127.0.0.1",
        "user": "root",
        "password": "root",
        "database": "staccato"
    }
}
```

3. Build the web service with the `npm run build` command.
4. Run migrations to ensure your database is up to date, using `npm run migrate`.
5. If you wish to insert test data, use the `npm run seed` command.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation

Once the app is running, swagger documentation can be found at the /api route.
eg. if you are running the web service locally, navigate to http://localhost:8080/api

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

contact Codie Stella for support.
