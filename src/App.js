import { Typography } from "@mui/material";
import ModalEdit from "./components/ModalEdit.jsx";
import ModalDelete from "./components/ModalDelete.jsx";
import ContactsInfo from "./components/ContactsInfo.jsx";
import Contactsview from "./components/Contactsview.jsx";

function App() {
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Contact Management
      </Typography>
      <ContactsInfo />
      <Contactsview />
      <ModalEdit />
      <ModalDelete />
    </div>
  );
}

export default App;
