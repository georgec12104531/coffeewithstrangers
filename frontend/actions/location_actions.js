import * as APIUtil from '../api_util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';


export const receiveLocations = (locations) => ({
  type: 'RECEIVE_LOCATIONS',
  locations
});

export const receiveLocation = (location) => ({
  type: 'RECEIVE_LOCATION',
  location
});

export const fetchLocations = () => dispatch => (
  APIUtil.fetchLocations().then( (locations) => (
    dispatch(receiveLocations(locations))
  ))
);

export const fetchLocation = (id) => dispatch => (
  APIUtil.fetchLocation(id).then( (location) => (
    dispatch(receiveLocation(location))
  ))
);
