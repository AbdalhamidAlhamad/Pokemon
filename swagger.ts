// src/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Pokemon API",
    version: "1.0.0",
    description: "A simple Express Pokemon API",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Development server",
    },
  ],
  tags: [
    {
      name: "Families",
      description: "Operations related to families",
    },
    {
      name: "EvolutionStages",
      description: "Operations related to evolution stages",
    },
    {
      name: "Types",
      description: "Operations related to types",
    },
    {
      name: "Weather",
      description: "Operations related to weather",
    },
    {
      name: "Pokemons",
      description: "Operations related to pokemons",
    },
  ],
  components: {
    schemas: {
      FamilyRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Name of the family",
            example: "Pikachu",
          },
        },
      },
      FamilyResponse: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id of the family",
            example: 1,
          },
          name: {
            type: "string",
            description: "Name of the family",
            example: "string",
          },
          createdAt: {
            type: "string",
            description: "Creation date",
            example: "2020-08-08T00:00:00.000Z",
          },
          updatedAt: {
            type: "string",
            description: "Update date",
            example: "2020-08-08T00:00:00.000Z",
          },
        },
      },
      EvolutionStageRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Name of the evolution stage",
            example: "Evolved Stage",
          },
        },
      },
      EvolutionStageResponse: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id of the evolution stage",
            example: 1,
          },
          name: {
            type: "string",
            description: "Name of the evolution stage",
            example: "string",
          },
          createdAt: {
            type: "string",
            description: "Creation date",
            example: "2020-08-08T00:00:00.000Z",
          },
          updatedAt: {
            type: "string",
            description: "Update date",
            example: "2020-08-08T00:00:00.000Z",
          },
        },
      },
      TypeRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Name of the type",
            example: "Oceanic",
          },
        },
      },
      TypeResponse: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id of the type",
            example: 1,
          },
          name: {
            type: "string",
            description: "Name of the type",
            example: "string",
          },
          createdAt: {
            type: "string",
            description: "Creation date",
            example: "2020-08-08T00:00:00.000Z",
          },
          updatedAt: {
            type: "string",
            description: "Update date",
            example: "2020-08-08T00:00:00.000Z",
          },
        },
      },
      WeatherRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Name of the weather",
            example: "Rainy",
          },
        },
      },
      WeatherResponse: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id of the weather",
            example: 1,
          },
          name: {
            type: "string",
            description: "Name of the weather",
            example: "string",
          },
          createdAt: {
            type: "string",
            description: "Creation date",
            example: "2020-08-08T00:00:00.000Z",
          },
          updatedAt: {
            type: "string",
            description: "Update date",
            example: "2020-08-08T00:00:00.000Z",
          },
        },
      },

      PokemonRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the Pokémon.",
            example: "Bulbasaur",
          },
          pokedexNumber: {
            type: "integer",
            description: "The Pokédex number of the Pokémon.",
            example: 243,
          },
          imgName: {
            type: "string",
            description: "The image file name of the Pokémon.",
            example: "pikamon.png",
          },
          generation: {
            type: "integer",
            description: "The generation to which the Pokémon belongs.",
            example: 7,
          },
          evolved: {
            type: "boolean",
            description: "Whether the Pokémon has evolved.",
            example: false,
          },
          crossGen: {
            type: "boolean",
            description: "Whether the Pokémon is cross-generational.",
            example: false,
          },
          evolutionStageId: {
            type: "integer",
            description: "The ID of the Pokémon's evolution stage.",
            example: 1,
          },
          familyId: {
            type: "integer",
            description: "The ID of the Pokémon's family.",
            example: 1,
          },
          typeIds: {
            type: "array",
            items: {
              type: "integer",
            },
            description: "Array of type IDs associated with the Pokémon.",
            example: [1],
          },
          weatherIds: {
            type: "array",
            items: {
              type: "integer",
            },
            description:
              "Array of weather condition IDs beneficial for the Pokémon.",
            example: [1],
          },
          atk: {
            type: "integer",
            description: "Attack stat of the Pokémon.",
            example: 149,
          },
          def: {
            type: "integer",
            description: "Defense stat of the Pokémon.",
            example: 108,
          },
          sta: {
            type: "integer",
            description: "Stamina stat of the Pokémon.",
            example: 124,
          },

          legendeary: {
            type: "boolean",
            description: "Whether the Pokémon is legendary.",
            example: true,
          },
          aquireable: {
            type: "boolean",
            description: "Whether the Pokémon can be acquired.",
            example: false,
          },
          spawns: {
            type: "integer",
            description: "Spawn rate of the Pokémon.",
            example: 91,
          },
          regional: {
            type: "boolean",
            description: "Whether the Pokémon is regional.",
            example: false,
          },
          raidable: {
            type: "boolean",
            description: "Whether the Pokémon can be encountered in raids.",
            example: false,
          },
          hatchable: {
            type: "boolean",
            description: "Whether the Pokémon can be hatched from eggs.",
            example: false,
          },
          shiny: {
            type: "boolean",
            description: "Whether the Pokémon can be shiny (alternate color).",
            example: true,
          },
          nest: {
            type: "boolean",
            description: "Whether the Pokémon nests in specific areas.",
            example: true,
          },
          new: {
            type: "boolean",
            description: "Whether the Pokémon is new.",
            example: false,
          },
          notGettable: {
            type: "boolean",
            description: "Whether the Pokémon is currently unobtainable.",
            example: false,
          },
          futureEvolve: {
            type: "boolean",
            description: "Whether the Pokémon has a future evolution.",
            example: true,
          },
          cp40: {
            type: "integer",
            description: "Combat Power of the Pokémon at level 40.",
            example: 1439,
          },
          cp39: {
            type: "integer",
            description: "Combat Power of the Pokémon at level 39.",
            example: 1410,
          },
        },
      },
      PokemonResponse: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "The unique identifier of the Pokémon.",
            example: 1,
          },
          name: {
            type: "string",
            description: "The name of the Pokémon.",
            example: "Metapod",
          },
          pokedexNumber: {
            type: "integer",
            description: "The Pokédex number of the Pokémon.",
            example: 253,
          },
          imgName: {
            type: "string",
            description: "The image file name of the Pokémon.",
            example: "pikamon.png",
          },
          generation: {
            type: "integer",
            description: "The generation to which the Pokémon belongs.",
            example: 7,
          },
          evolved: {
            type: "boolean",
            description: "Whether the Pokémon has evolved.",
            example: true,
          },
          crossGen: {
            type: "boolean",
            description: "Whether the Pokémon is cross-generational.",
            example: true,
          },
          atk: {
            type: "integer",
            description: "Attack stat of the Pokémon.",
            example: 45,
          },
          def: {
            type: "integer",
            description: "Defense stat of the Pokémon.",
            example: 94,
          },
          sta: {
            type: "integer",
            description: "Stamina stat of the Pokémon.",
            example: 137,
          },
          statTotal: {
            type: "integer",
            description: "Total of all stats of the Pokémon.",
            example: 276,
          },
          legendeary: {
            type: "boolean",
            description: "Whether the Pokémon is legendary.",
            example: true,
          },
          aquireable: {
            type: "boolean",
            description: "Whether the Pokémon can be acquired.",
            example: false,
          },
          spawns: {
            type: "integer",
            description: "Spawn rate of the Pokémon.",
            example: 8,
          },
          regional: {
            type: "boolean",
            description: "Whether the Pokémon is regional.",
            example: false,
          },
          raidable: {
            type: "boolean",
            description: "Whether the Pokémon can be encountered in raids.",
            example: false,
          },
          hatchable: {
            type: "boolean",
            description: "Whether the Pokémon can be hatched from eggs.",
            example: true,
          },
          shiny: {
            type: "boolean",
            description: "Whether the Pokémon can be shiny (alternate color).",
            example: true,
          },
          nest: {
            type: "boolean",
            description: "Whether the Pokémon nests in specific areas.",
            example: true,
          },
          new: {
            type: "boolean",
            description: "Whether the Pokémon is new.",
            example: true,
          },
          notGettable: {
            type: "boolean",
            description: "Whether the Pokémon is currently unobtainable.",
            example: false,
          },
          futureEvolve: {
            type: "boolean",
            description: "Whether the Pokémon has a future evolution.",
            example: true,
          },
          cp40: {
            type: "integer",
            description: "Combat Power of the Pokémon at level 40.",
            example: 450,
          },
          cp39: {
            type: "integer",
            description: "Combat Power of the Pokémon at level 39.",
            example: 443,
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Timestamp of when the Pokémon was created.",
            example: "2023-12-17T14:42:30.000Z",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Timestamp of when the Pokémon was last updated.",
            example: "2023-12-17T14:42:30.000Z",
          },
          familyId: {
            type: "integer",
            description: "The ID of the Pokémon's family.",
            example: 1,
          },
          evolutionStageId: {
            type: "integer",
            description: "The ID of the Pokémon's evolution stage.",
            example: 2,
          },
          family: {
            $ref: "#/components/schemas/FamilyResponse",
          },
          evolutionStage: {
            $ref: "#/components/schemas/EvolutionStageResponse",
          },
          types: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeResponse",
            },
          },
          weather: {
            type: "array",
            items: {
              $ref: "#/components/schemas/WeatherResponse",
            },
          },
        },
      },
    },
  },
  // ...
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.ts", "./dist/routes/*.js"], // Adjust to your routes' locations
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
