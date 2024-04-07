import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/movies" element={<div>MoviesPage</div>} />
      </Routes>
    </div>
  );
}

export default App;

// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
