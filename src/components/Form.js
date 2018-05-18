import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city" required/>
                    <input type="text" name="country" placeholder="country" required/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
};

export default Form;