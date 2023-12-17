# Pokemon Api

## Description
This Pokémon project is a backend application built with Node.js and Sequelize, providing RESTful APIs for managing Pokémon data. The application includes functionalities for handling Pokémon attributes such as types, weather conditions, and evolution stages.

## Features
1.CRUD operations for Pokémon data.

2.Association of Pokémon with types, weather families and stages conditions.

3.Filtering options for fetching specific Pokémon data.

4.Comprehensive unit tests to ensure functionality and reliability.

## Getting Started with Docker
Ensure you have Docker and Docker Compose installed on your machine.
Then follow these steps to get the application up and running:

### 1. Clone the Repository
```sh
git clone https://github.com/AbdalhamidAlhamad/Pokemon.git

cd Pokemon
```

### 2. Start the Application Using Docker Compose

```sh
sudo docker compose up
```
This command will set up the Node.js application and the MySQL database. It will also run any necessary database migrations.


### 3. Accessing the Application
Once the Docker containers are up and running, the application will be accessible at http://localhost:8080


## API Usage
The application exposes various endpoints, such as:

1./api/pokemons - Manage Pokémon data.

2./api/types - Manage Pokémon types.

3./api/weather - Manage with Pokémon weather.

4./api/families - Manage Pokémon families.

5./api/stages - Manage evolution stages.

For detailed information about the API endpoints and usage, refer to the Swagger documentation available at 
http://localhost:8080/api-docs

## Running Tests
To run the test suite in a Docker environment, use the following command:

```sh
sudo docker compose -f docker-compose.test.yml up --abort-on-container-exit
```
