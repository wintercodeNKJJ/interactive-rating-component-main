import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Rating, Results } from "./components";
import { useState } from "react";

function App() {
  const [choice, setChoice] = useState(0);
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Rating send={setChoice} />} />
          <Route path="/sucess" element={<Results rate={choice} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
