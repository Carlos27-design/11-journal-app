import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { checkingCredential, logout, login } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredential());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredential());
    const result = await signInWithGoogle();

    if (!result.ok) dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWhithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredential());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredential());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(clearNotesLogout());

    dispatch(logout({}));
  };
};
