import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_SYTLES } from '../GoogleMap/SilverTheme';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


 
class SimpleMap extends Component {

  constructor (){

    super()
    this.state ={
      api_key:process.env.REACT_APP_MAP_KEY
    }
    


  }

  static defaultProps = {
    center: {
      lat: 19.410669, 
      lng: -99.160667
    },
    zoom: 11,
    //styles: MAP_STYLES
    
    
  };
 
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '40%' }}>
        <GoogleMapReact 
          bootstrapURLKeys={{key:this.state.api_key}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          styles={this.props.styles}
          
        >
          <AnyReactComponent
            lat={19.410669}
            lng={-99.160667}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;