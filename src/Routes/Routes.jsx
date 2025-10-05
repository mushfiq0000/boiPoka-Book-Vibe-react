import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import ReadList from '../pages/ReadList/ReadList';
import Bookdetails from '../pages/Bookdetails/Bookdetails';


export const router = createBrowserRouter([
    {
      path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                index: true,
                path:"/",
                Component: Home,
                loader:()=>fetch('booksData.json'),
            },
            {
                path: 'readList',
                loader:()=>fetch('booksData.json'),
                Component:ReadList
            },
            {
                path: '/bookDetails/:id',
                loader:()=>fetch('./booksData.json'),
                Component:Bookdetails
            }
      ]
    },
]);
