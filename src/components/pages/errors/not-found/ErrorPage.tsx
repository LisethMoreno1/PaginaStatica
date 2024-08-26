import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center h-[93vh] text-center bg-gray-100 p-3">
            <h1 className="text-6xl text-red-600">404</h1>
            <h2 className="text-4xl mt-2">Página no encontrada</h2>
            <p className="text-base mt-2">La página que busca no existe.</p>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleGoHome}
            >
                Ir a Inicio
            </button>
        </div>
    );
};

export default ErrorPage;
