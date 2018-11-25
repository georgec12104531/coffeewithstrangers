import { connect } from 'react-redux';
import CoffeeTimeShow from './coffee_time_show';

export const msp = (state, ownProps) => ({
   attendances: state.entities.attendances,
    })

export const mdp = dispatch => ({
    fetchLocations: () => dispatch(fetchLocations()),
    fetchCoffeeTime: (id) => dispatch(fetchCoffeeTimes(id))
});

export default connect(
  msp,
  mdp
)(CoffeeTimeShow);