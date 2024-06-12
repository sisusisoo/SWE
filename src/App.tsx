import { useEffect, useState } from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import styled from 'styled-components'
import LayoutSWE from './component/LayoutSWE'

import Olympic_main from './router/Olympic_main'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import LoadingScreen from './component/loading-screen'
import { auth } from './firebase'
import ProtectedRoute from './component/protected-route';

//추가
// import Olympic_soeun from './router/Olympic-soeun'
import Olympic_tournament from './router/Olympic_tournament'

import Olympic_search from './router/Olympic-Search'
import Olympic_consult from './router/Olympic_consult'
//import Olympic_board from './router/Olympic_board'
import ProfileSWE from './router/ProfileSWE'
import Member from './router/Member'
import LoginSWE from './router/LoginSWE'
import Create_accountSWE from './router/Create_accountSWE'

// Olympic_board 해제하고 추가
import Olympic_sohee from './router/Olympic_sohee'


const router =createBrowserRouter([
  {
  path:"/",
  element:<ProtectedRoute>
  < LayoutSWE />
  </ProtectedRoute>,
  children:[
    {
    path:"",
    element:<Olympic_main/>
    //element:<Home/>
 
    },
    {
      path:"profileSWE",
      element:<ProfileSWE/>

    },
    {
      path:"/olympic_tournament",
      element:<Olympic_tournament/>
    },
    {
      path:"/olympic",
      //element:<Soeun/>
    }
    ,
    {
      path:"/olympic_search",
      element:<Olympic_search/>
    }
    ,
    {
      path:"/olympic_consult",
      element:<Olympic_consult/>
    }
    ,
    {
      path:"/olympic_board",
      element:<Olympic_sohee/>
    }
    ,
    {
      path:"/Member",
      element:<Member/>
    }
    
  
  ]
},
{
  path:"/loginSWE",
  element:<LoginSWE/>

},
{
  path:"/create_accountSWE",
  element:<Create_accountSWE/>
},





]);

const GlobalStyles =createGlobalStyle`
${reset};
*{
  box-sizing:border-box;
  // 아래 font 관련 추가
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
body{
  //background-color:black;
  //color:white;
  //font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;

const Wrapper =styled.div`
height: 100vh;
display: flex-column;
justify-content:center;
`

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const init = async ()=>{
    await auth.authStateReady();
    setTimeout(()=>setIsLoading(false),200)

  };
  useEffect(()=>{
    init();

  }); 

  return (
    <>
    <Wrapper>
    <GlobalStyles/>
    {isLoading ?<LoadingScreen/> : <RouterProvider router={router}/>}
    </Wrapper>
    </>
  );

  
}

export default App
