[Rewrite of this](https://stackabuse.com/using-sequelize-js-and-sqlite-in-an-express-js-app/)

# Initialize

```(bash)
npx sequelize init || node_modules/.bin/sequelize init
```

Creates a directory

```
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── package-lock.json
├── package.json
├── seeders
└── server.js
```

The purpose for the directories are as follows:

- config/index.js - this defines the connection parameters and sql dialet
migrations - contains migration scripts to manage the versioning of the schema
- models - contains the data models you use to interact with the database within your application code
- seeders - contains scripts to populate your database with initial data

# Generate the model

```(bash)
npx sequelize model:generate --name Contact --attributes firstName:string,lastName:string,phone:string,email:string
```

Flags
- Name -- Name of the table to be created
- Attributes -- each table header and the type associated with it

Creates the model file and the migration script.


# Pre-Seed the model
```(bash)
npx sequelize seed:generate --name seed-contact
```