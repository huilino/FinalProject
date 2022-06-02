import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Recipe from '../components/Recipe';
import ErrorPage from '../components/ErrorPage';
import UserReview from '../components/UserReview';
import View from '../components/View';
import AddReview from '../components/AddReview';
import EditReview from '../components/EditReview';


export default function Pages() {
  return (
    <Routes>
        <Route path = "/searched/:search" element={<Recipe/>}/>
        <Route path = "/review" element={<UserReview/>}/>
        <Route path = "/user/:id" element={<View/>}/>
        <Route path = "/editreview/:id" element={<EditReview/>}/>
        <Route path = "/addreview" element={<AddReview/>}/>
        <Route path = "/" element={<Home/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}
