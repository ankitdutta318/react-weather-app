import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>city: { this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
                { this.props.temp_max && <p>temp_max: { this.props.temp_max }</p> }
                { this.props.temp_min && <p>temp_min: { this.props.temp_min }</p> }
                { this.props.wind && <p>wind: { this.props.wind }</p> }
                { this.props.humidity && <p>humidity: { this.props.humidity }</p> }
                { this.props.description && <p>description: { this.props.description }</p> }
            </div>
        );
    }
};

export default Weather;

