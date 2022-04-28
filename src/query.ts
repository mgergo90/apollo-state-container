import { gql } from "@apollo/client";

export const GET_PLANETS = gql`
  query getAllPlanets {
    allPlanets {
      planets {
        id
        name
        population
        climates
        terrains
      }
    }
  }
`;

export const GET_SELECTED_PLANETS = gql`
  query GetSelectedPlanets {
    selectedPlanets @client {
      planets {
        id
        name
      }
    }
  }
`;
