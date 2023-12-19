import { Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth/Routes/AuthRoute';
import { JournalRoute } from '../journal/routes/JournalRoute';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={<AuthRoute />} />
      {/* JournalApp */}
      <Route path='/*' element={<JournalRoute />} />
    </Routes>
  );
};
