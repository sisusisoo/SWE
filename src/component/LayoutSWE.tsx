import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth ,db} from "../firebase";
import { collection, doc, limit, onSnapshot, orderBy, query,where } from "firebase/firestore";
import { UMember } from "../router/Member";
import { useEffect, useState,useRef } from "react";
import { Unsubscribe,deleteUser, getAuth } from "firebase/auth";
const Wrapper =styled.div`

height:100%;
width : 100%;


`;
//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import { FaAddressBook } from "react-icons/fa6";
import { BsPersonFill, BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";
import  "../component/style.css"
import logo from "../assets/img/olympics.png"
//

export default function LayoutSWE(){
    const navigate=useNavigate();
    const [adminOk,setAdminOk]=useState(0);
    const onLogOut = async ()=>{
        const ok=confirm("Are you sure? you want to Log Out");
        if(ok){
            await auth.signOut();
            navigate("/LoginSWE");
        }

    }
    const toHome = ()=>{
       navigate("/")

    }
    const toProfile = ()=>{
        navigate("/profileSWE")
 
     }
    const toMember = ()=>{
        navigate("/Member")
 
    }
    const toLogin = ()=>{
        navigate("/LoginSWE")
 
     }
     useEffect(() => {// admin 사용자만  member접근가능
      

        let unsubscribe: Unsubscribe | null = null;
        const fetchMember = async () => {
            const adminRef = collection(db, "userProfile");
            const q = query(adminRef, where("profandstu", "==", "admin"));
      
          unsubscribe = await onSnapshot(q, (snapshot) => {
            const adminQ = snapshot.docs.map((doc) => {
              const { name, email, pw, studentid, profandstu, userID, createdAt } = doc.data();
              console.log(name)
              return {
                name, email, pw, studentid, profandstu, userID, createdAt
              };
            })
            console.log("auth",auth.currentUser.uid,"admigQ",adminQ[0].userID)

            if(adminQ[0].userID===auth.currentUser.uid){
                setAdminOk(1);
            }
          })

        }
    
    
        fetchMember();
        console.log("로그인 정보 확인",adminOk)

        return ()=>{
            unsubscribe && unsubscribe();
        }
      }, [])
      

    
    
        

 

    return(
        <Wrapper>
            <nav className="navbar bg-blue">
            <div id ="nav" className="container-fluid">
                <img src={logo} alt="Logo" id="logo" className="d-inline-block align-text-top"></img>
                <ul className="nav justify-content-end">
                <li className="nav-item"><a className="nav-link white" aria-current="page" onClick={()=>toHome()}><BsFillHouseFill />&nbsp;Home</a></li>
                <li className="nav-item"><a className="nav-link white" onClick={()=>toProfile()}><BsPersonFill />MyPage</a></li>
                <li className="nav-item"><a className="nav-link white" onClick={()=>onLogOut()}><BsDoorOpenFill />&nbsp;Logout</a></li>
                {adminOk == 1 ?<li className="nav-item"><a className="nav-link white" onClick={()=>toMember()}><FaAddressBook />&nbsp;Member</a></li>:
                null }
                
                </ul>
            </div>
            </nav>
                
            <Outlet/>
        </Wrapper>
    );
}