import './App.css'
import AppRoutes from './routes/appRoutes'
import './fonts/In_your_face_joffrey.ttf';
import { HashRouter } from 'react-router-dom';

function App() {

  return (
   <HashRouter>
   <AppRoutes />
   </HashRouter>
  )
}

export default App
