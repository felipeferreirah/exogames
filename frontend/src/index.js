import React from 'react'
import ReactDOM from "react-dom/client";

import {BrowserRouter} from 'react-router-dom'
import './styles/global.scss'
import Routes from './routes'

//util
import {ScrollToTop} from "./util/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes/>
</BrowserRouter>
)

