import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import HomePage from "./pages/homepage/HomePage"
import ListPage from "./pages/listpage/ListPage"
import LocationPage from "./pages/locationpage/LocationPage"
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
