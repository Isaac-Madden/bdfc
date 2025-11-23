import { Routes, Route } from 'react-router-dom';
import {AppRoutes, NotFoundRoute} from '../Utils/RouteDefinitions';

const RouterConfig = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route 
        key={route.path} 
        path={route.path} 
        element={route.element} 
        />
      ))}

      <Route 
        path={NotFoundRoute.path} 
        element={NotFoundRoute.element} 
      />
    </Routes>
  );
};

export default RouterConfig;