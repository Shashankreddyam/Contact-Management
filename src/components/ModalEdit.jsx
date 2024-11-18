import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";

export default function ModalEdit(props) {
  console.log(props.data._id);

  let _id = props.data._id;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [details, setDetails] = useState({
    id: props.data._id,
    firstname: props.data.firstname,
    lastname: props.data.lastname,
    email: props.data.email,
    phone: props.data.phone,
    company: props.data.company,
    jobtitle: props.data.jobtitle,
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (id) => {
    debugger;
    axios
      .put(`http://localhost:3000/contacts/${_id}`, details)
      .then((response) => {
        console.log("Data deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Details</DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="firstname"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.firstname}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="lastname"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.lastname}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              defaultValue={props.data.email}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="phone"
              label="Phone Number"
              type="number"
              min={10}
              max={10}
              fullWidth
              variant="standard"
              defaultValue={props.data.phone}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="company"
              label="Company"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.company}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="jobtitle"
              label="Job Title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={props.data.jobtitle}
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
