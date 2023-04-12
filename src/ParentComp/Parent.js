import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Components/Home.js';
import Student from '../Components/Student';
import Contact from '../Components/Contact';
import Add from '../Components/Add';
import Edit from '../Components/Edit';

const ParentComp=()=>{
    return(
       <BrowserRouter>{/*this is wrapper fun which tells the shorter browser router is going to use  */}
            <Routes>{/*(if we have multiple route so we use routes) we can put multiple route bez we are creating multipage application */}
               <Route path='/' element={<Layout />}>
                  <Route path='/home' element={<Home />} />{/* inside route we declares an element that should be rendered at a certain URL path */}
                  <Route path='/student-1' element={<Student />} />
                  <Route path='/contact-us' element={<Contact />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/edit' element={<Edit />} />
               </Route> 
            </Routes>
       </BrowserRouter>
    )
}
 export default ParentComp;



