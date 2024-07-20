import '@styles/mixins.scss';
import '@styles/variables.scss';
import '@styles/normalize.scss';
import './i18n/i18n.config';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { BlogPage } from '@pages/BlogPage';
import { NotFoundPage } from '@pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App