import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Container>
          <main className="py-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
            </Routes>
          </main>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
