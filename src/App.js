import "@fontsource/protest-guerrilla"; // Defaults to weight 400
import "@fontsource/protest-guerrilla/400.css"; // Specify weight

import { UsersTableWrapper } from "./features/users/containers/UsersTableWrapper/UsersTableWrapper";
import { Header } from "./ui/shared/Header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <UsersTableWrapper />
    </div>
  );
}

export default App;
