import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoute = () => {
  return (
    <Routes>
      {/* Ruta para el login */}
      <Route path='login' element={<LoginPage />} />
      {/* Ruta para el register */}
      <Route path='register' element={<RegisterPage />} />

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
