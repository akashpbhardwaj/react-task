
var categoriesState = []
const categories = (state = categoriesState, action) => {
    switch (action.type) {
      case "categories":
        state = action.data
        return state;
      default:
        return state
    }
}

var catsState =[]

const cats = (state = catsState, action) => {
  switch (action.type) {
    case "cats":
        state = action.data
        console.log(state);
      return state
    default:
      return state
  }
}

export  { categories, cats };