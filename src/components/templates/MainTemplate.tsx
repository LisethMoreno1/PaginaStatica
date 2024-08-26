import React from 'react';
import Header from '../organisms/home/Header';
import Footer from '../organisms/home/Footer';

interface MainTemplateProps {
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainTemplate;
