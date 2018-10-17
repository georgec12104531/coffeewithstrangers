export const fetchCoffeeTimes = () => {
  return $.ajax ({
    method: 'GET',
    url: "/api/coffee_times"
  });
};

export const fetchCoffeeTime = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/coffee_times/${id}`
  });
};


export const createCoffeeTime = (coffee_time) => {
  return $.ajax({
    method: 'POST',
    url: "/api/coffee_times",
    data: { coffee_time }
  });
};

export const updateCoffeeTime = (coffeeTime) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/coffee_times/${coffeeTime.id}`,
    data: { coffee_time: coffeeTime }
  });
};

export const deleteCoffeeTime = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/coffeetimes/${id}`

  });
};
