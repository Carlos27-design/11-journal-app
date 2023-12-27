import {
  authSlice,
  checkingCredential,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import {
  authenticated,
  demoUser,
  initialState,
  notAuthenticatedState,
} from '../../fixture/authFixtures';

describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial y llamarse auth', () => {
    expect(authSlice.name).toBe('auth');

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('debe de realizar la autenticación', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated',
      uid: 'ABC123',
      email: 'demo@gmail.com',
      displayName: 'Demo User',
      photoURL: 'https://demo.jpg',
      errorMessage: null,
    });
  });

  test('debe de realizar el logout sin argumentos', () => {
    const state = authSlice.reducer(authenticated, logout());
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout y mostrar un mensaje de error', () => {
    const errorMessage = 'Credendiales no validas';

    const state = authSlice.reducer(authenticated, logout({ errorMessage }));
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: 'Credendiales no validas',
    });
  });

  test('debe de cambiar el estado a checking', () => {
    const state = authSlice.reducer(authenticated, checkingCredential());
    expect(state.status).toBe('checking');
  });
});
