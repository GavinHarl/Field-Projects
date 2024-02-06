import React from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {
    render(): React.ReactNode {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{lat: 41.00722885131836, lng: -92.41583251953125}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDuYpoDF_WPp8XXLjOuRD0sGgB4Ci3avjg',
})(GoogleMap);