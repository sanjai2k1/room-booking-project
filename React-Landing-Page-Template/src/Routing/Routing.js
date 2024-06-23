import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminDashBoard from "../components/AdminDashBoard";
import App from "../App";
import UsersListComponent from "../components/UsersListComponent";
import RoomAddComponent from "../components/RoomAddComponent";
import EditandUpdateComponent from "../components/EditandUpdateComponent";
import LoginApp from "../components/LoginApp";
import SignUp from "../components/SignUp";
import UserDashBoard from "../components/UserDashBoard";
import SelectCity from "../Pages/SelectCity";
import SelectedRooms from "../Pages/SelectedRooms";
import HomeComp from "../Pages/HomeComp";
import EditComponent from "../components/EditComponent";
import WithLogin from "../components/WithLogin";

const router = createBrowserRouter([
  {
    path:"",
    element:<Navigate to="landing"/>
  },
  {
    path:"login",
    element:<LoginApp/>
  },
  {
    path:"signup",
    element:<SignUp/>
  },
  {
    path:"userdashboard/:id",
    element: <><UserDashBoard/></>,
    children:[

      {
         path:"select-rooms",
         element:<SelectCity/>
      },
      {
        path:"selected-rooms",
        element:<SelectedRooms/>
     },{
      path:"",
      element:<HomeComp/>
     }
    ]
  },
  {
    path:"admindashboard",
    element:<AdminDashBoard/>,children:[{
      path:"userslist",
      element:<UsersListComponent/>
    },{

      path:"roomadd",
      element:<RoomAddComponent/>



    },{
      path:"",
      element:<Navigate to="editandupdate"/>
    }
    ,{
      path:"editandupdate",
      element:<EditandUpdateComponent/>
    },{

      path:"edit/:id",
      element:<EditComponent/>
    }
  
  
  ]

  },{
    path:"landing",
    element: <App/>
  }

]);

export default router;
{/* <Route path="/" element={<HomeComp/>} />
<Route
  path="/select-rooms"
  element={<SelectCity onBookRoom={handleBookRoom} />}
/>
<Route
  path="/selected-rooms"
  element={<SelectedRooms bookedRooms={bookedRooms} />}
/> */}