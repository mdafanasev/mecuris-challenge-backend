# Mecuris challenge back-end

Back-end part for Mercuris challenge

Front-end part is [here](https://github.com/mdafanasev/mecuris-challenge-frontend)

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

[Volta](https://volta.sh/) is recommended tool to manage Node.JS and NPM versions

## How to run

Install dependencies:

```bash
npm install
```

Then run the app in dev mode:

```bash
npm start
```

Default port is 3000, so the application will be available in [http://localhost:3000](http://localhost:3000)
