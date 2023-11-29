
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/image/problemas.jpg" alt="Descripción de la imagen" width="500" />
      <button className="mx-auto mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Volver al Inicio
      </button>
    </div>
  );
};

export default NotFoundPage;
