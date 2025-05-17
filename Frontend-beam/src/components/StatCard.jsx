import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ image, value, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const step = Math.ceil(value / (duration / 16));
        let start = 0;
        const timer = setInterval(() => {
            start = Math.min(start + step, value);
            setCount(start);

            if (start >= value) {
                clearInterval(timer);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, duration, isVisible]);

    return (
        <div
            ref={cardRef}
            className="d-flex flex-column align-items-center justify-content-center p-4 text-center"
            style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <div className="mb-3">
                <img
                    src={image}
                    alt={label}
                    className=""
                    style={{
                        width: '95px',
                        height: '100px'
                    }}
                />
            </div>
            <div className="display-6 fw-bold text-success mb-2">+ {count}</div>
            <div className="text-success small" style={{ maxWidth: '140px' }}>{label}</div>
        </div>
    );
};

StatCard.propTypes = {
    image: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    duration: PropTypes.number
};

export default StatCard;