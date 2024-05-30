import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { collection, doc, limit, onSnapshot, orderBy, query,where } from "firebase/firestore";
import { Unsubscribe,deleteUser, getAuth } from "firebase/auth";//이거 보류
import { useEffect, useState,useRef } from "react";


const Wrapper = styled.div`

height:100%;
width : 100%;


`;
//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from 'react-bootstrap'
import { FaAddressBook } from "react-icons/fa6";
import { BsPersonFill, BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";
import "../component/style.css"
import { equalTo } from "firebase/database";
//

export interface UMember {//export
  name: string,
  email: string,
  pw: string,
  studentid: string,
  profandstu: string,
  userID: string,
  createdAt: number

}

export default function LayoutSWE() {
  const [student, setStudent] = useState<UMember[]>([])
  const [prof, setProf] = useState<UMember[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchMember = async () => {
      const stuQuery = query(
        collection(db, "userProfile"),
        //orderBy("createdAt","desc"),
        where("profandstu","==","stu"),
        orderBy("name", "desc"),
        limit(25),
      )
      const profQuery = query(
        collection(db, "userProfile"),
        //orderBy("createdAt","desc"),
        where("profandstu","==","prof"),
        orderBy("name", "desc"),
        limit(25),
      )

      unsubscribe = await onSnapshot(stuQuery, (snapshot) => {
        const student = snapshot.docs.map((doc) => {
          const { name, email, pw, studentid, profandstu, userID, createdAt } = doc.data();
          console.log(name)
          return {
            name, email, pw, studentid, profandstu, userID, createdAt
          };
        })
        // const prof = snapshot.docs.map((doc) => {
        //   const { name, email, pw, studentid, profandstu, userID, createdAt } = doc.data();
        //   console.log(name)
        //   return {
        //     name, email, pw, studentid, profandstu, userID, createdAt
        //   };
        // })
        setStudent(student)
      })
      await onSnapshot(profQuery, (snapshot) => {
        const prof = snapshot.docs.map((doc) => {
          const { name, email, pw, studentid, profandstu, userID, createdAt } = doc.data();
          console.log(name)
          return {
            name, email, pw, studentid, profandstu, userID, createdAt
          };
        })
        setProf(prof)
      })

    }

    
    fetchMember();
    return ()=>{
        unsubscribe && unsubscribe();
    }
  }, [])
  

  
  const deleteUserFunc = (uid) =>{
    

    deleteUser(uid)
  .then(() => {
    console.log('Successfully deleted user');
  })
  .catch((error) => {
    console.log('Error deleting user:', error);
  });
  }


  return (
    <Wrapper> <div id="content-member">
      {/*Table 1 */}
      <div className="container mt-4">

        <table id="table1" className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">이름</th>
              <th scope="col">학번</th>
              <th scope="col">이메일</th>
              <th scope="col">비밀번호</th>
              {/* <th scope="col">이메일</th> */}
            </tr>
          </thead>
          <tbody>

          {/* unique한 key값 넣어 줘야함 */}
          {/* 색인등록해야함 */}
          {student.map((student,index) => (
             <>
              <tr>
                  <td >{index+1}</td>
                  <td key={student.name}>{student.name}</td>
                  <td key={student.studentid}>{student.studentid}</td>
                  <td key={student.email}>{student.email}</td>
                  <td key={student.pw}>{student.pw}</td>
                  {/* <td key={student.userID}>{student.userID}</td> */}
                
                  {/*  <td> <span className="btn btn-primary" onClick={()=> deleteUserFunc(student.userID)} >계정 삭제</span> </td> */}
              </tr>
            </>
          ))}
        
          </tbody>
        </table>
      </div>

      {/*Table 2 */}
      <div className="container mt-4">
        <table id="table2" className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">이름</th>
              <th scope="col">교수번호</th>
              <th scope="col">이메일</th>
              <th scope="col">비밀번호</th>
    
            </tr>
          </thead>
          <tbody>
          {prof.map((prof,index) => (
             <>
              <tr>
                  <td >{index+1}</td>
                  <td key={prof.name}>{prof.name}</td>
                  <td key={prof.studentid}>{prof.studentid}</td>
                  <td key={prof.email}>{prof.email}</td>
                  <td key={prof.pw}>{prof.pw}</td>
              </tr>
            </>
          ))}
          
          </tbody>
        </table>
      </div>
    </div>


      <Outlet />
    </Wrapper>
  );
}