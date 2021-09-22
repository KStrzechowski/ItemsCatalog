import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddItemPage } from './AddItemPage';
import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { ItemPage } from './ItemPage';
import { NotFoundPage } from './NotFoundPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/items/:itemId" element={<ItemPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
