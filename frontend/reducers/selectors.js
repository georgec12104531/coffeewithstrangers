
// export const getCoffeeTimesSF = ( coffeeTimes ) => (
// 	Object.values(coffeeTimes).filter(coffeeTime => coffeeTime.location_id === 19)
// );


export const myAttendances = state => (
  Object.values(state.entities.attendances).filter(attendance => attendance.user_id === state.session.id).map( el => el.coffee_time_id)
);

export const myCoffeeTimes = state => (
  Object.values(state.entities.coffeeTimes).filter(coffeeTime => myAttendances(state).includes(coffeeTime.id))
);

export const myHostedCoffeeTimes = state => (
  Object.values(state.entities.coffeeTimes).filter(coffeeTime => coffeeTime.host_id === state.session.id)
)