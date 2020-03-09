import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import { Link } from "react-router-dom";
import checkAuth from '../Components/checkAuth'

const Listings = ({listings, deleteListing},props) => {
  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, idx) => (
            <TableRow key={idx}>
              <TableCell>
              <TableCell component={Link} to={`/details/${listing.id}`}>{listing.name}</TableCell>
               </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.address}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>
              {checkAuth() &&
                  <TableCell align='center'>
                    <DeleteIcon color='error' onClick={() => deleteListing(idx)} />
                  </TableCell>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
export default Listings;
