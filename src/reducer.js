// think of this file as the data layer
// reducer is always listening

export const initialState = {
    basket: [],
    user: null //initially
};

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
        // whenever it recieves an action of add to basket
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_CART":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );

            let newCart = [...state.basket];

            if (index >= 0) {
                newCart.splice(index, 1);//the item is removed from the cart 
            }
            else {
                console.warn(`Can't remove product (id : ${action.id} as its not in the basket :<)`);
            }

            return {
                ...state,
                basket: newCart
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;