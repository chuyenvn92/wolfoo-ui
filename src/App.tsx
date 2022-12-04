import { Routes } from "react-router-dom";
import routes from "./Routes/Routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes>{routes}</Routes>
    </div>
  );
}

export default App;
