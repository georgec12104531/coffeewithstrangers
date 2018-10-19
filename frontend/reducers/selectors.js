

export const getCoffeeTimesSF = ( coffeeTimes ) => (
	Object.values(coffeeTimes).filter(coffeeTime => coffeeTime.location_id === 19)
);
