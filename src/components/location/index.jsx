import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3235.0235021583508!2d-82.65001191401872!3d27.846112047358424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6a03d30cf93%3A0xf7ed8d90d68c09de!2sSteak+&#39;n+Shake!5e0!3m2!1sen!2sus!4v1533578841237"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="google_maps"
            />
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
