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

const Listings = props => {
  console.log(props.listings);
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
          {props.listings.map((listings, idx) => (
            <TableRow key={listings.name}>
              <TableCell>
               <Link to={`/details/${listings.id}`}>{listings.name}</Link>
               </TableCell>
              <TableCell>{listings.description}</TableCell>
              <TableCell>{listings.address}</TableCell>
              <TableCell>{listings.hours}</TableCell>
              <TableCell>
                <DeleteIcon
                        // add onClick method here
                        onClick={() => props.removeCar(idx)}
                        className="icon text-red" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
export default Listings;
