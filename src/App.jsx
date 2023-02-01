import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/appRoutes'
import './fonts/In_your_face_joffrey.ttf';

function App() {

  return (
   <BrowserRouter>
   <AppRoutes />
   </BrowserRouter>
  )
}

export default App
