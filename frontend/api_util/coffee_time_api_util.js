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


export const createCoffeeTime = (coffeeTime) => {
  return $.ajax({
    method: 'POST',
    url: "/api/coffeetimes",
    data: { coffeeTime }
  });
};

export const updateCoffeeTime = (coffeeTime) => {
  return $.ajax({
    method: 'POST',
    url: `/api/coffeetimes/${coffeeTime.id}`,
    data: { coffeeTime }
  });
};

export const deleteCoffeeTime = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/coffeetimes/${id}`

  });
};
