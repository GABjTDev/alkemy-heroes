import './App.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

// Components
import Header from './components/Header';

//Context
import { ConnectProvider } from './context/ConnectContext';
import { TeamProvider } from './context/TeamContext';

//Router 
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRoutes from './routes/AppRoutes';

//Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid dark p-0">
      <ConnectProvider>
        <TeamProvider>
          <Router>
            <Header />
            <AppRoutes />
          </Router>
          <ToastContainer />
        </TeamProvider>
      </ConnectProvider>
    </div>
  );
}

export default App;
