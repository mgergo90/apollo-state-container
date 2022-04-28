/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPlanets
// ====================================================

export interface getAllPlanets_allPlanets_planets {
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
  /**
   * The terrains of this planet.
   */
  terrains: (string | null)[] | null;
}

export interface getAllPlanets_allPlanets {
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: (getAllPlanets_allPlanets_planets | null)[] | null;
}

export interface getAllPlanets {
  allPlanets: getAllPlanets_allPlanets | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSelectedPlanets
// ====================================================

export interface GetSelectedPlanets_selectedPlanets_planets {
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
}

export interface GetSelectedPlanets_selectedPlanets {
  planets: GetSelectedPlanets_selectedPlanets_planets[];
}

export interface GetSelectedPlanets {
  selectedPlanets: GetSelectedPlanets_selectedPlanets;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
