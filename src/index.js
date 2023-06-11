import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <App />
    
  </React.StrictMode>
);
