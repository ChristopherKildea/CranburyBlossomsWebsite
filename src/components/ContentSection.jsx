import React from 'react';
import "../css/ContentSection.css"

const ContentSection = () => {
    return (
        <div className="container">
            <div className="left-column">
                <h2>Left Column (Larger)</h2>
                <p>This column takes up more space.</p>
                <div className="inner-content">Additional content here</div>
            </div>
            <div className="right-column">
                <h2>Right Column (Smaller)</h2>
                <p>This column takes up less space.</p>
                <div className="inner-content">Additional content here</div>
            </div>
        </div>
    );
};

export default ContentSection;
