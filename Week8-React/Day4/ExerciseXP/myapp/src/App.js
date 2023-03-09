import './App.css';
import React from 'react';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import PostList from './components/PostList'
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

import {Routes, Route, Link} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const getData = async () => {
  
  let obj = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  }

  try {
      const result = await fetch('https://webhook.site/1ea68675-b3fe-403d-bcc5-c5b3f142d11a',
       {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: { 'Content-type': 'text/plain; charset=UTF-8', }
      })
      if (result.ok) {
          const data = await result.json();
          return data;
      } else {
          throw new Error("something is wrong")
      }
  } catch (error) {
      console.log('##fetch error:' , error)
  }
}

const App = () => {
  const data = getData();
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/postlist'>PostList</Link>
        <Link to='/example1'>Example1</Link>
        <Link to='/example2'>Example2</Link>
        <Link to='/example3'>Example3</Link>
      </nav>

<button onClick={() => {console.log(data)}}>Exercise 4 - Show Response</button>

      <Routes>
        <Route path='/' element={
          <ErrorBoundary key='1'>
            <HomeScreen/>
          </ErrorBoundary>
        } />
        <Route path='profile' element={
          <ErrorBoundary key='2'>
            <ProfileScreen/>
          </ErrorBoundary>
          } />
        <Route path='shop' element={
          <ErrorBoundary key='3'>
            <ShopScreen/>
          </ErrorBoundary>
        } />
        <Route path='postlist' element={
          <ErrorBoundary key='4'>
            <PostList/>
          </ErrorBoundary>
        } />
        <Route path='example1' element={
          <ErrorBoundary key='5'>
            <Example1/>
          </ErrorBoundary>
        } />
        <Route path='example2' element={
          <ErrorBoundary key='6'>
            <Example2/>
          </ErrorBoundary>
        } />
        <Route path='example3' element={
          <ErrorBoundary key='7'>
            <Example3/>
          </ErrorBoundary>
        } />
      </Routes>
    </>
  )     
}

export default App;
