import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ListPage from "./pages/ListPage"
import LocationPage from "./pages/LocationPage"
function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/list' element={<ListPage/>} />
          <Route path='/location' element={<LocationPage/>} />
        </Route>
      </Routes>
  )
}

export default App
