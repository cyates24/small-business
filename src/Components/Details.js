import React from 'react';
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>




const Details = (props) => {
  const name = props.match.params.name
  const details = props.listings.find(d => d.name == name)
  
  // const defaultProps = {
  //   center: {
  //     lat: Number(details.latitude),
  //     lng: Number(details.longitude),
  //   },
  //   zoom: 10
  // };
  
  // console.log(defaultProps.center)
  return (
      <Container maxWidth="sm" className="car-container">
          <Paper className="car-paper">
              <h2>{details.name}</h2>
              {
                  Object.keys(details).map((key, idx) => {
                      return <Chip label={`${key}: ${details[key]}`}></Chip>
                  })
              }
          </Paper>
          {/* <Container style={{ height: "400px", width: "450px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.AIzaSyDYR10RfezcqGBIAYnrOqMyZ1tdoRxJRo }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={details.latitude} lng={details.longitude} text={details.name} />
          <Marker lat={details.latitude} lng={details.longitude} />
        </GoogleMapReact>
      </Container> */}
      </Container>
  )
}

export default Details;
