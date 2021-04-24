import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes.jsx";
import { Grid, CssBaseline } from "@material-ui/core";
import TopNav from "./components/TopNav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import "../styles/global.scss";
import "../styles/App.scss";
import "../styles/nav.scss";

const App = () => {
  return (
    <Router>
          <Grid container direction="column">
              <TopNav/>
              <main className="container_styles"
              style={{overflowY: "auto"}}>
                    <Routes/>
                </main>
              <BottomNav/>
          </Grid>
          <CssBaseline/>
    </Router>
  );
}

export default App;
