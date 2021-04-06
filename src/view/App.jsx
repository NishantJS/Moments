import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import Routes from "./pages/Routes.jsx";

const App = () => {
  return (
    <Router>
        <Header />
        <main>
            <Routes />
        </main>
    </Router>
);
}

export default App;
