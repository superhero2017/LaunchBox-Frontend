import {
  CLEAR_ERROR_REQUEST,
  SIGN_UP_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  REGISTER_EMAIL_REQUEST,
  CONFIRM_REGISTER_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  GET_USER_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_CONFIRM_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  CLEAR_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPLOAD_PHOTO_REQUEST,
  DELETE_PHOTO_REQUEST,
  USER_SUBSCRIPTION_REQUEST,
  GET_COMPANY_REQUEST,
  UPDATE_COMPANY_REQUEST,
  ADD_PAYMENT_REQUEST,
  UPDATE_PAYMENT_REQUEST,
  CREATE_SUBSCRIBE_REQUEST,
  UPDATE_SUBSCRIBE_REQUEST,
} from './constants';

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

/*
 * Action to Clear Error
 */
export const clearError = () => action(CLEAR_ERROR_REQUEST);

/*
 * Action to sign up
 */
export const register = {
  request: query => action(SIGN_UP_REQUEST.REQUEST, { query }),
  success: response => action(SIGN_UP_REQUEST.SUCCESS, { response }),
  failure: error => action(SIGN_UP_REQUEST.FAILURE, { error }),
};

/*
 * Action to logIn
 */
export const logIn = {
  request: query => action(LOG_IN_REQUEST.REQUEST, { query }),
  success: response => action(LOG_IN_REQUEST.SUCCESS, { response }),
  failure: error => action(LOG_IN_REQUEST.FAILURE, { error }),
};

/*
 * Action to logOut
 */
export const logOut = {
  request: () => action(LOG_OUT_REQUEST.REQUEST),
  success: response => action(LOG_OUT_REQUEST.SUCCESS, { response }),
  failure: error => action(LOG_OUT_REQUEST.FAILURE, { error }),
};

/*
 * Action to send registration email
 */
export const registerEmail = {
  request: query => action(REGISTER_EMAIL_REQUEST.REQUEST, { query }),
  success: response => action(REGISTER_EMAIL_REQUEST.SUCCESS, { response }),
  failure: error => action(REGISTER_EMAIL_REQUEST.FAILURE, { error }),
};

/*
 * Action to confirm registration token
 */
export const registerConfirmation = {
  request: token => action(CONFIRM_REGISTER_REQUEST.REQUEST, { token }),
  success: response => action(CONFIRM_REGISTER_REQUEST.SUCCESS, { response }),
  failure: error => action(CONFIRM_REGISTER_REQUEST.FAILURE, { error }),
};

/*
 * Action to forgot password
 */
export const forgotPassword = {
  request: email => action(FORGOT_PASSWORD_REQUEST.REQUEST, { email }),
  success: response => action(FORGOT_PASSWORD_REQUEST.SUCCESS, { response }),
  failure: error => action(FORGOT_PASSWORD_REQUEST.FAILURE, { error }),
};

/*
 * Action to reset password
 */
export const resetPassword = {
  request: query => action(RESET_PASSWORD_REQUEST.REQUEST, { query }),
  success: response => action(RESET_PASSWORD_REQUEST.SUCCESS, { response }),
  failure: error => action(RESET_PASSWORD_REQUEST.FAILURE, { error }),
};

/*
 * Action to get user from token
 */
export const getUser = {
  request: () => action(GET_USER_REQUEST.REQUEST),
  success: response => action(GET_USER_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_USER_REQUEST.FAILURE, { error }),
};

/*
 * Action to update user
 */
export const updateUser = {
  request: value => action(UPDATE_USER_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_USER_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_USER_REQUEST.FAILURE, { error }),
};

/*
 * Action to get company
 */
export const getCompany = {
  request: () => action(GET_COMPANY_REQUEST.REQUEST),
  success: response => action(GET_COMPANY_REQUEST.SUCCESS, { response }),
  failure: error => action(GET_COMPANY_REQUEST.FAILURE, { error }),
};

/*
 * Action to update company
 */
export const updateCompany = {
  request: value => action(UPDATE_COMPANY_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_COMPANY_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_COMPANY_REQUEST.FAILURE, { error }),
};

/*
 * Action to update user email
 */
export const updateEmail = {
  request: value => action(UPDATE_EMAIL_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_EMAIL_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_EMAIL_REQUEST.FAILURE, { error }),
};

/*
 * Action to update user email
 */
export const updateEmailConfirm = {
  request: token => action(UPDATE_EMAIL_CONFIRM_REQUEST.REQUEST, { token }),
  success: response =>
    action(UPDATE_EMAIL_CONFIRM_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_EMAIL_CONFIRM_REQUEST.FAILURE, { error }),
};

/*
 * Action to update user password
 */
export const updatePassword = {
  request: value => action(UPDATE_PASSWORD_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_PASSWORD_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_PASSWORD_REQUEST.FAILURE, { error }),
};

/*
 * Action to clear user
 */
export const clearUser = {
  request: () => action(CLEAR_USER_REQUEST.REQUEST),
  success: response => action(CLEAR_USER_REQUEST.SUCCESS, { response }),
  failure: error => action(CLEAR_USER_REQUEST.FAILURE, { error }),
};

/*
 * Action to delete user
 */
export const deleteUser = {
  request: () => action(DELETE_USER_REQUEST.REQUEST),
  success: response => action(DELETE_USER_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_USER_REQUEST.FAILURE, { error }),
};

/*
 * Action to upload user's photo
 */
export const uploadPhoto = {
  request: value => action(UPLOAD_PHOTO_REQUEST.REQUEST, { value }),
  success: response => action(UPLOAD_PHOTO_REQUEST.SUCCESS, { response }),
  failure: error => action(UPLOAD_PHOTO_REQUEST.FAILURE, { error }),
};

/*
 * Action to delete user's photo
 */
export const deletePhoto = {
  request: () => action(DELETE_PHOTO_REQUEST.REQUEST),
  success: response => action(DELETE_PHOTO_REQUEST.SUCCESS, { response }),
  failure: error => action(DELETE_PHOTO_REQUEST.FAILURE, { error }),
};

/*
 * Action to delete user's photo
 */
export const userSubscribe = {
  request: value => action(USER_SUBSCRIPTION_REQUEST.REQUEST, { value }),
  success: response => action(USER_SUBSCRIPTION_REQUEST.SUCCESS, { response }),
  failure: error => action(USER_SUBSCRIPTION_REQUEST.FAILURE, { error }),
};

/*
 * Action to add payment
 */
export const addPayment = {
  request: value => action(ADD_PAYMENT_REQUEST.REQUEST, { value }),
  success: response => action(ADD_PAYMENT_REQUEST.SUCCESS, { response }),
  failure: error => action(ADD_PAYMENT_REQUEST.FAILURE, { error }),
};

/*
 * Action to update payment
 */
export const updatePayment = {
  request: value => action(UPDATE_PAYMENT_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_PAYMENT_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_PAYMENT_REQUEST.FAILURE, { error }),
};

/*
 * Action to create subscribe
 */
export const createSubscribe = {
  request: value => action(CREATE_SUBSCRIBE_REQUEST.REQUEST, { value }),
  success: response => action(CREATE_SUBSCRIBE_REQUEST.SUCCESS, { response }),
  failure: error => action(CREATE_SUBSCRIBE_REQUEST.FAILURE, { error }),
};

/*
 * Action to update subscribe
 */
export const updateSubscribe = {
  request: value => action(UPDATE_SUBSCRIBE_REQUEST.REQUEST, { value }),
  success: response => action(UPDATE_SUBSCRIBE_REQUEST.SUCCESS, { response }),
  failure: error => action(UPDATE_SUBSCRIBE_REQUEST.FAILURE, { error }),
};
