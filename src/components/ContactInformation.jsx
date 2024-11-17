import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalEdit from "./ModalEdit.jsx";
import ModalDelete from "./ModalDelete.jsx";

function createData(firstname, lastname, email, phone, company, jobtitle) {
  return { firstname, lastname, email, phone, company, jobtitle };
}

const rows = [
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
  createData(
    "Shashank",
    "Ambaljeri",
    "ash@gmail.com",
    9663411839,
    "shl",
    "developer"
  ),
];

export default function ContactInformation() {
  const [inputarr, setInputarr] = useState([]);
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  let { firstname, lastname, email, phone, company, jobtitle } = details;
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputarr([
      ...inputarr,
      {
        firstname,
        lastname,
        email,
        phone,
        company,
        jobtitle,
      },
    ]);

    console.log(inputarr);
    console.log(details);

    setDetails({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      jobtitle: "",
    });
  };

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} action=".">
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            name="firstname"
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={handleChange}
            fullWidth
            required
            value={details.firstname}
          />
          <TextField
            name="lastname"
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={handleChange}
            fullWidth
            required
            value={details.lastname}
          />
        </Stack>
        <TextField
          name="email"
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={handleChange}
          fullWidth
          required
          value={details.email}
          sx={{ mb: 4 }}
        />
        <TextField
          name="phone"
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone No"
          onChange={handleChange}
          required
          fullWidth
          min={10}
          max={10}
          value={details.phone}
          sx={{ mb: 4 }}
        />
        <TextField
          name="company"
          type="text"
          variant="outlined"
          color="secondary"
          label="Company"
          onChange={handleChange}
          fullWidth
          required
          value={details.company}
          sx={{ mb: 4 }}
        />
        <TextField
          name="jobtitle"
          type="text"
          variant="outlined"
          color="secondary"
          label="Job Title"
          onChange={handleChange}
          fullWidth
          required
          value={details.jobtitle}
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>

      <h2>Contacts Table</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Job Title</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firstname}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
                <TableCell align="right">{row.lastname}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.jobtitle}</TableCell>
                <TableCell align="right">
                  <ModalEdit />
                </TableCell>
                <TableCell align="right">
                  <ModalDelete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
