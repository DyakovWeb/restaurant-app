import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import './assets/styles/index.scss'
import { Suspense } from 'react';
import { routerNavigations } from './const/router';
import { PageLoader } from './ui/PageLoader';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import LayoutContextProvider from './providers/LayoutContextProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigations.map(({path, element})=>({
      path: path,
      element:<Suspense fallback={<PageLoader/>}>
                {element}
              </Suspense>
    }))
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LayoutContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </LayoutContextProvider>
    </PersistGate>
  </Provider>
)
