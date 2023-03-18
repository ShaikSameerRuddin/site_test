import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyImportType } from '../../../../shared/helpers/utils';

//lazy Imports
const Home: LazyImportType = React.lazy(async () => ({
  default: (await import('../../../home/pages/Home')).Home,
}));

export const RoutesComponents: React.FC<{}> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
