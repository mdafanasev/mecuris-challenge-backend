# Mecuris challenge back-end

Back-end part for Mercuris challenge

Front-end part is [here](https://github.com/mdafanasev/mecuris-challenge-frontend)

## Preview

[http://mecuris-challenge.afsv.me/](http://mecuris-challenge.afsv.me/)

## Description of the challenge

Implement a simple configurator application that retrieves a configuration data from the server and
shows the 3D visualization of a model. The configurator should allow the user to perform some actions
on the 3D model.

### User stories

- As a user, I want the app to show me a list of all the entries stored in the backend
- As a user, When I select an id, I want to see the 3D render of the object with the attribute stored
  in the backend
- As a user, I want to change the color/geometry (any attribute you decided to add to your model)
  of the 3D object, this change should be saved in the backend.
- As a user, I want to delete an existing entry stored in the backend via frontend/client. This
  change should be reflected in the backend.

## Prerequisites

- Node.JS 18.10.0
- NPM 8.19.2
- PostgreSQL 14.5

[Volta](https://volta.sh/) is recommended tool to manage Node.JS and NPM versions

## How to run

Install dependencies:

```bash
npm install
```

Use environment variables or `.env` file to configure access to the PostgreSQL:

```
MECURIS_DB_HOST=dbhost
MECURIS_DB_PORT=5432
MECURIS_DB_USER=username
MECURIS_DB_PASSWORD=password
MECURIS_DB_NAME=dbname
```

You can just copy `.env.example` and fill it:

```bash
cp .env.example .env
```

Then run the app in dev mode:

```bash
npm start
```

Default port is 3000, so the application will be available in [http://localhost:3000](http://localhost:3000)

### Static files and DB dump

You can use resources from `/_data` directory.

To use static files just copy `static` folder to the root of project:

```bash
cp -r _data/static ./static
```

To load postgres dump:

```bash
psql dbname < ./_data/mecuris_challenge_db_v1.sql
```

Replace dbname with database name from `.env` file

## Data model

### Item

Keeps name, 3D model and preview image. Can be removed (not physically, just using `isRemoved` flag)

### Attribute

Linked to `Item`. Keeps name, type and value of the attribute. Value can be updated

## Can be improved

- Add endpoint to create new entries and attributes 
- Replace JSON-based glTF with binary glb format
- Implement updating previews (see README in the frontend repo)
- Map string values of attributes to correct types (like a boolean for `true`/`false`)
- Dockerize application to make deployment simpler
