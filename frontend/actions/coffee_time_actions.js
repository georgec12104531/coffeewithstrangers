import * as APIUtil from '../api_util/coffee_time_api_util';

export const RECEIVE_COFFEE_TIMES = 'RECEIVE_COFFEE_TIMES';
export const RECEIVE_COFFEE_TIME = 'RECEIVE_COFFEE_TIME';
export const REMOVE_COFFEE_TIME = 'REMOVE_COFFEE_TIME';
export const RECEIVE_COFFEE_TIME_ERRORS = 'RECEIVE_COFFEE_TIME_ERRORS';


export const receiveCoffeeTimes = (coffeeTimes) => ({
  type: RECEIVE_COFFEE_TIMES,
  coffeeTimes
});

export const receiveCoffeeTime = (coffeeTime) => {
  return {
    type: RECEIVE_COFFEE_TIME,
    coffeeTime
  };
};

export const removeCoffeeTime = (id) => {
  return {
    type: REMOVE_COFFEE_TIME,
    coffeeTimeId: id
  };
};

export const receiveCoffeeTimeErrors = (errors) => {
  return {
    type: RECEIVE_COFFEE_TIME_ERRORS,
    errors
  };
};

export const fetchCoffeeTimes = () => dispatch => (
  APIUtil.fetchCoffeeTimes().then( coffeeTimes => (
    dispatch(receiveCoffeeTimes(coffeeTimes))
  ), err => (
    dispatch(receiveCoffeeTimeErrors(err.responseJSON))
  ))
);

export const fetchCoffeeTime = (id) => dispatch => (
  APIUtil.fetchCoffeeTime(id).then( coffeeTimeBack => (
    dispatch(receiveCoffeeTime(coffeeTimeBack))
  ), err => (
    dispatch(receiveCoffeeTimeErrors(err.responseJSON))
  ))
);

export const createCoffeeTime = (coffeeTime) => dispatch => (
  APIUtil.createCoffeeTime(coffeeTime).then( coffeeTimeBack => (
    dispatch(receiveCoffeeTime(coffeeTimeBack))
  ), err => (
    dispatch(receiveCoffeeTimeErrors(err.responseJSON))
  ))
);

export const updateCoffeeTime = (coffeeTime) => dispatch => (
  APIUtil.updateCoffeeTime(coffeeTime).then( coffeeTimeBack => (
    dispatch(receiveCoffeeTime(coffeeTimeBack))
  ), err => (
    dispatch(receiveCoffeeTimeErrors(err.responseJSON))
  ))
);

export const deleteCoffeeTime = (id) => dispatch => (
  APIUtil.deleteCoffeeTime(id).then( () => (
    dispatch(removeCoffeeTime(id))
  ), err => (
    dispatch(receiveCoffeeTimeErrors(err.responseJSON))
  ))
);
