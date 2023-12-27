export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticated = {
  status: 'authenticated',
  uid: 'ABC123',
  email: 'demo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: 'ABC123',
  email: 'demo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
};
