import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from './UserContext'
import { NotificationContextProvider } from './NotificationContext'
import App from './App'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <NotificationContextProvider>
      <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      </QueryClientProvider>
    </NotificationContextProvider>
  </UserContextProvider>
)