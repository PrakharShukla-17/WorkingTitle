
import './App.css'
import {Signup} from './components/Signup.jsx'

import { Outlet,BrowserRouter,Route,Routes } from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import { ViewPage } from "./pages/ViewPage"
function App() {
  return(

      


      
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout></Layout>}>

                  <Route index element={<HomePage></HomePage>}></Route>
                  <Route path="viewPage" element={<ViewPage></ViewPage>}></Route>
                   
               </Route>
            </Routes>
          </BrowserRouter>
      

  )
}




function Layout(){
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <h3 >This is supoosed to be the nav bar thingy</h3>

      <main className="flex items-center justify-center">
      <Outlet></Outlet>
      </main>
      

      <footer >this is supposed to be the footer</footer>
    </div>
  )
}

export default App

