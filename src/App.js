import { Typography } from "@mui/material";
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
    </div>
  );
}

export default App;
