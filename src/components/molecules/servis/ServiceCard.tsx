import React from 'react';
import Card from '../../atoms/card/Card';
import CardHeader from '../../atoms/card/CardHeader';
import CardContent from '../../atoms/card/CardContent';
import CardDescription from '../../atoms/card/CardDescription';
import CardFooter from '../../atoms/card/CardFooter';
import CardTitle from '../../atoms/card/CardTitle';

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
                <a href="#" className="text-primary hover:underline">Saber más</a>
            </CardFooter>
        </Card>
    );
};

export default ServiceCard;
