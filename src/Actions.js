var getCategories = () => (dispatch) => {

    return fetch('https://api.thecatapi.com/v1/categories')
        .then(resp => resp.json())
        .then(jsonData => {
            dispatch({
                type: "categories",
                data: jsonData
            });
        })
}

var getCats = (categoryId) => (dispatch) => {
    return fetch('https://api.thecatapi.com/v1/images/search?limit=10&category_ids='+categoryId)
        .then(resp => resp.json())
        .then(jsonData => {
            dispatch({
                type: "cats",
                data: jsonData
            });
        })
}

export { getCategories,getCats }