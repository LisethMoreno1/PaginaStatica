import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import ErrorPage from './components/pages/errors/not-found/ErrorPage';
import PageStatics from './components/pages/PageStatics';
import AppRouter from './routes';
import MainMenu from './components/organisms/siderbar/MainMenu';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<PageStatics />} />
          <Route element={<MainMenu />}>
            {AppRouter.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
