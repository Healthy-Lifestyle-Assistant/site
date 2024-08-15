import { FC } from 'react';
import './App.scss';
import './i18n/i18n.config';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { BlogPage } from '@pages/BlogPage';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export const App: FC = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <div className="App__content">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<HomePage />} />
              <Route path="services" element={<HomePage />} />
              <Route path="team" element={<HomePage />} />
              <Route path="contact-us" element={<HomePage />} />
              <Route path="blog" element={<BlogPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}