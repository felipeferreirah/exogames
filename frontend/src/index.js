import React from 'react'
import {render} from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import './styles/global.scss'
import Routes from './routes'
import {ToastsContainer, ToastsStore} from 'react-toasts';
//util
import {ScrollToTop} from "./util/ScrollToTop";

render(
  <BrowserRouter>
  <ToastsContainer lightBackground store={ToastsStore}/>
  <ScrollToTop/>
  <Routes/>
</BrowserRouter>, document.querySelector('#root'))
