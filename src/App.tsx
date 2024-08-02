import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuotes />} />
      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
}

export default App;
