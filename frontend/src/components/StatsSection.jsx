import React from 'react';
import StatCard from './StatCard';
import GlobeIcon from '../assets/Numbers/imgSection1.jpg';
import CertificateIcon from '../assets/Numbers/imgSection2.jpg';
import ProjectIcon from '../assets/Numbers/imgSection3.jpg';
import ClientsIcon from '../assets/Numbers/imgSection4.jpg';

const StatsSection = () => {
    const stats = [
        {
            image: ClientsIcon,
            value: 20,
            label: 'Clients'
        },
        {
            image: ProjectIcon,
            value: 50,
            label: 'Projects'
        },
        {
            image: CertificateIcon,
            value: 15,
            label: 'Certifications of security'
        },
        {
            image: GlobeIcon,
            value: 10,
            label: 'Pays'
        }
    ];

    return (
        <section className="py-4 stats-section">
            <div className="container">
                <h2 className="display-6 fw-bold text-center text-success mb-5">
                    SOFTAWERTICH in Numbers
                </h2>
                <div className="row g-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-3 mt-1">
                            <StatCard
                                image={stat.image}
                                value={stat.value}
                                label={stat.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;