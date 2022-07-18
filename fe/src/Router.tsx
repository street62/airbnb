import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Result from 'pages/Result';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
