import React from 'react';
import Progress from '../../atoms/card/Progress';

interface DonationViewerProps {
    donationGoal: number;
    currentDonations: number;
}

const DonationViewer: React.FC<DonationViewerProps> = ({ donationGoal, currentDonations }) => {
    return (
        <div className="donation-viewer">
            <h2 className="text-xl font-semibold mb-2 text-secondary">Visualizador de Donaciones</h2>
            <Progress value={(currentDonations / donationGoal) * 100} className="mb-2" />
            <p className="text-foreground/70">
                ${currentDonations.toLocaleString()} recaudados de nuestra meta de ${donationGoal.toLocaleString()}
            </p>
        </div>
    );
};

export default DonationViewer;
