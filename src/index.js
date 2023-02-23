import React from "react"; // componentlerde bu import çıkıyor. componentlerde olmasına gerek yok bu yüzden siliyoruz.index.js en yukarda oldugu için alt componentlerde olmasına gerek yok. bu yüzden siliyoruz.
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
