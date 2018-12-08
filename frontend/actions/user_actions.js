import * as APIUtil from '../api_util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(userBack => (
    dispatch(receiveUser(userBack))
  ))
);
