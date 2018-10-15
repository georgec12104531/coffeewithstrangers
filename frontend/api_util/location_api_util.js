

export const fetchLocations = () => {
  return $.ajax({
    method: "GET",
    url: "/api/locations"
  });
};


export const createLocation = (location) => {
  return $.ajax({
    method: "POST",
    url: "/api/locations",
    data: { location }
  });
};
