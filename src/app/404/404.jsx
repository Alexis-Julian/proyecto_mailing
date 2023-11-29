
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="mb-8">
        <div className="envelope">
          <div className="cross1"></div>
          <div className="cross2"></div>
        </div>
      </div>
      <h1 className="text-2xl mb-4">404 - Página no encontrada</h1>
      <p className="text-sm text-gray-700">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
};

export default NotFound;