import { connect } from 'react-redux';
import CoffeeTimeShow from './coffee_time_show';
import { fetchCoffeeTime } from "../../actions/coffee_time_actions";

export const msp = (state, ownProps) => ({
  id: ownProps.match.params.coffeeTimeId,
});

export const mdp = dispatch => ({
  fetchCoffeeTime: id => dispatch(fetchCoffeeTime(id)),
});

export default connect(
  msp,
  mdp
)(CoffeeTimeShow);