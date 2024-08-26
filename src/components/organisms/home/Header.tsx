import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-primary-foreground shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex space-x-4 justify-center sm:justify-end">
                    <li><a href="#" className="hover:underline">Inicio</a></li>
                    <li><a href="#" className="hover:underline">Inicia Sesion</a></li>
                    <li><a href="#" className="hover:underline">Dona</a></li>
                    <li><a href="#" className="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
