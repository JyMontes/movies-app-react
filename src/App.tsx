import Main from './components/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from "./components/details";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Main/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
