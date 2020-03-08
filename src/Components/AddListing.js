import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

class AddListing extends Component {
  state = {
    open: false,
    name: "",
    description: "",
    hours: "",
    address: ""
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.lisTotal + 1;
    delete payload.open;
  
    // add this.props.addCar function here
    this.props.addListing(payload);
    // also add this.setState to close the dialog
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        description: "",
        hours: "",
        address: ""
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add Listing:</h1>
          <Button
            variant="contained"
            className="add-listing"
            onClick={this.toggleDialog}
          >
            Add Listing
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Listing</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px"
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name of Business"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="description"
                  placeholder="About"
                  value={this.state.description}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="hours"
                  placeholder="Enter Hours"
                  value={this.state.hours}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="address"
                  placeholder="Enter Address"
                  value={this.state.address}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddListing;
