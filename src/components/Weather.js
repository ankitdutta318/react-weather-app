import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Loacation: { this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
                { this.props.temp_max && <p>Temp Max: { this.props.temp_max }</p> }
                { this.props.temp_min && <p>Temp Min: { this.props.temp_min }</p> }
                { this.props.wind && <p>Wind Speed: { this.props.wind }</p> }
                { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
                { this.props.description && <p>Description: { this.props.description }</p> }
                { this.props.error && <p>Error: { this.props.error }</p> }
            </div>
        );
    }
};

export default Weather;

