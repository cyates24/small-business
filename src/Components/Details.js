import React from 'react';
import { Container, Paper, Chip } from '@material-ui/core';
// import GooglyMap from '../Components/GooglyMap'




const Details = (props) => {
  const name = props.match.params.name
  const details = props.listings.find(d => d.Name == name)
  
  
  return (
      <Container maxWidth="sm" className="car-container">
          <Paper className="car-paper">
              <h2>{details.name}</h2>
              {
                  Object.keys(details).map((key, idx) => {
                      return <Chip label={`${key}: ${details[key]}`}></Chip>
                  })
              }
              {/* <div><GooglyMap = {details.address}/></div> */}
          </Paper>
         
      </Container>
  )
}

export default Details;