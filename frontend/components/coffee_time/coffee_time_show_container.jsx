import { connect } from 'react-redux';
import CoffeeTime from './coffee_time_show';
import { fetchCoffeeTime } from '../../actions/coffee_time_actions';

export const msp = (state, ownProps) => ({
  id: ownProps.match.params.coffeeTimeId,
  coffeeTime: state.entities.coffeeTimes[ownProps.match.params.coffeeTimeId],
});

export const mdp = dispatch => ({
  fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
});

export default connect(
  msp,
  mdp,
)(CoffeeTime);
