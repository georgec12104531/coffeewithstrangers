import { connect } from 'react-redux';
import CoffeeTimeShow from './coffee_time_show';

export const msp = state => {
  return {
    coffeeTimes: Object.values(state.entities.coffeeTimes),
    attendances: state.entities.attendances,
  };
};

export const mdp = dispatch => {
  return {
    fetchLocations: () => dispatch(fetchLocations()),
    fetchCoffeeTimes: () => dispatch(fetchCoffeeTimes())
  };
};

export default connect(
  msp,
  mdp
)(CoffeeTimeShow);
