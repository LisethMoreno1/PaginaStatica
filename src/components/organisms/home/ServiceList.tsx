import React from 'react';
import ServiceCard from '../../molecules/servis/ServiceCard';

interface ServiceListProps {
    services: { title: string; description: string }[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
        </div>
    );
};

export default ServiceList;
