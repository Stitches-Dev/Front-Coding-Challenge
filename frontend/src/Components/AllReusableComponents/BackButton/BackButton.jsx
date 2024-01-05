import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <button className="BackButton" onClick={() => { handleGoBack() }}>
            &lt; Back
        </button >
    );
};

export default BackButton;
