import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';

const ColdCodersOs = lazy(() => import('./apps/ColdCodersOs'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <ColdCodersOs/>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
