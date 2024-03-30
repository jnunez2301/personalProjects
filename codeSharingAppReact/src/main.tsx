import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Routes from './routes/Routes.tsx';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <PrimeReactProvider>
      <Routes />
      <ReactQueryDevtools initialIsOpen={false} />
    </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
