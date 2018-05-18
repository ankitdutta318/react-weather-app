import React from 'react';

const Weather = props => (
    <div>
        { props.city && props.country && <p>Loacation: { props.city }, { props.country }</p> }
        { props.temperature && <p>Temperature: { props.temperature }</p> }
        { props.wind && <p>Wind Speed: { props.wind }</p> }
        { props.humidity && <p>Humidity: { props.humidity }</p> }
        { props.description && <p>Description: { props.description }</p> }
        { props.error && <p>Error: { props.error }</p> }
    </div>
);

export default Weather;

