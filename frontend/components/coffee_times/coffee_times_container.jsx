import { connect } from 'react-redux';
import CoffeeTimes from './coffee_times';
import { fetchLocations } from '../../actions/location_actions';
import { fetchCoffeeTimes } from '../../actions/coffee_time_actions';

import { getCoffeeTimesSF } from '../../reducers/selectors';

export const msp = (state) => {
  return {
    coffeeTimes: Object.values(state.entities.coffeeTimes),
    attendances: state.entities.attendances,
    locations: Object.values(state.entities.locations),
    coffeeTimesSF: getCoffeeTimesSF(state.entities.coffeeTimes)
  };
};

export const mdp = (dispatch) => {
  return {
    fetchLocations: () => dispatch(fetchLocations()),
    fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes())
  };
};

export default connect(msp, mdp)(CoffeeTimes);
