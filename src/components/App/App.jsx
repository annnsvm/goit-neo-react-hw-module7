import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Authorization/operations';
import { PrivateRoute } from 'components/UserMenu/PrivateRoute';
import { RestrictedRoute } from 'components/UserMenu/RestrictedRoute';
import { useAuth } from 'hooks';

const HomeScreen = lazy(() => import('../../screens/HomeScreen/HomeScreen'));
const LoginScreen = lazy(() => import('../../screens/LoginScreen/LoginScreen'));
const RegisterScreen = lazy(() =>
  import('../../screens/RegisterScreen/RegisterScreen')
);
const ContactList = lazy(() => import('../ContactList/ContactList'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactList />} redirectTo="/login" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterScreen />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginScreen />}
            />
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}
