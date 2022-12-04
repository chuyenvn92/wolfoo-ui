import { Routes } from "react-router-dom";
import routes from "./Routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes>{routes}</Routes>
      <Footer />
    </div>
  );
}

export default App;
