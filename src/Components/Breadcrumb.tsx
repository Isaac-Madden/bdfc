import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import '../Styles/Components/Breadcrumb.css';

const Breadcrumb: React.FC = () => {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  let accumulatedPath = '';

  return (
    <nav className="Breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map(value => {
          accumulatedPath += `/${value}`;

          return (
            <li key={accumulatedPath}>
                <Link to={accumulatedPath}>/ {value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;