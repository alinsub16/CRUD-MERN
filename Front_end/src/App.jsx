import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateNewMember from './Page/CreateNewMember'
import ListOfMerbers from './Page/ListOfMerbers' 
import UpdateMember from './Page/UpdateMember'

function App() {
 

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListOfMerbers />}></Route>
            <Route path='/Create' element={<CreateNewMember />}></Route>
            <Route path='/Update/:id' element={<UpdateMember />}></Route>
          </Routes>
        </BrowserRouter>


    </div>
      
  
  )
}

export default App
