import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
import { Provider } from 'react-redux';
import {store} from './store'
import axios from 'axios';

axios.defaults.withCredentials = true





const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" index={true} element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path="/posts/:postId" element={<Post />} />
    <Route path="/edit" element={<EditPost />} />
    
  </Route>
))





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);


