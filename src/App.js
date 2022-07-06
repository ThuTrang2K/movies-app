import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Router>
                <Header></Header>
                <Routes>
                    {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
