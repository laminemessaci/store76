import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

/**
 * Adds a product to the cart.
 *
 * @param {string} id - The ID of the product.
 * @param {number} qty - The quantity of the product.
 * @return {Promise} A promise that resolves when the product is added to the cart.
 */
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

/**
 * Removes an item from the cart.
 *
 * @param {string} id - The ID of the item to be removed.
 * @param {function} dispatch - A function to dispatch actions.
 * @param {function} getState - A function to get the current state.
 * @return {void}
 */
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

/**
 * Save the shipping address and dispatch an action.
 *
 * @param {Object} data - The shipping address data to be saved.
 * @param {Function} dispatch - The dispatch function from the Redux store.
 * @return {void}
 */
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

/**
 * Saves the payment method selected by the user and updates the cart.
 *
 * @param {Object} data - The payment method data to be saved.
 * @param {Function} dispatch - The dispatch function from the Redux store.
 * @return {void} This function does not return anything.
 */
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
