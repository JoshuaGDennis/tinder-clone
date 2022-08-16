import { CssBaseline } from "@mui/material";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Cards />
    <SwipeButtons />
  </>
);

export default App;
