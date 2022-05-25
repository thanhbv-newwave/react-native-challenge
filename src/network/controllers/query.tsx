
const CARD_QUERY = `query {
  cards {
    id
    name
  }
}`;

const CREATE_CARD = `
  mutation {
    createCard(
      data: {
        name: "My Food Style"
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

const SHARE_CARD = `
  mutation shareCard($id: ID!) {
    shareCard(id: $id)
  }
`;

const DUPLICATE_CARD = `
  mutation duplicateCard($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;

const DELETE_CARD = `
  mutation deleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;

export {CARD_QUERY, CREATE_CARD, SHARE_CARD, DUPLICATE_CARD, DELETE_CARD};
