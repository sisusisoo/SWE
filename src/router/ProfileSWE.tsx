//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from 'react-bootstrap'
import "../component/style.css"
import { Navigate, useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar"
import { db,auth} from "../firebase";
import { useEffect, useState, useRef } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Unsubscribe } from "firebase/auth";
import CommentShowSearch from '../component/comment_show_search';
import CommentShow from '../component/comment_show';

//import Olympic_soeun from "./Olympic_soeun"

//Firebase DB
export interface ProfDB {//export
  이름: string,
  email: string,
  img: string,
  tel: string,
  세부전공: string,
  연구분야: string,
  연구실: string,
  학력: string,
  강의1: string,
  강의2: string,
  강의3: string,
  강의4: string,
  강의5: string,
  상담1: string,
  상담2: string,
  상담3: string,
  상담4: string,
  상담5: string,
  주요경력1: string,
  주요경력2: string,
  주요경력3: string,
  승리횟수: number,
  연구실이름: string
  ProfUID: string


}


export default function Olympic_profile() {
  const [profData, setProfData] = useState<ProfDB[]>([])
  const [searchInput, setSearchInput] = useState("");
  const [profName,setProfName]= useState("");
  let unsubscribe: Unsubscribe | null = null;



  const search = async (name, e) => {
    e.preventDefault()
    const profRef = collection(db, "professor");
    const q = query(profRef, where("이름", "==", name));
    await onSnapshot(q, (snapshot) => {
      const prof = snapshot.docs.map((doc) => {
        const { 이름, email, img, tel, 세부전공, 연구분야, 연구실, 학력,
          강의1, 강의2, 강의3, 강의4, 강의5,
          상담1, 상담2, 상담3, 상담4, 상담5, 승리횟수, 주요경력1, 주요경력2,
          주요경력3,
          연구실이름
        } = doc.data();
        const ProfUID = doc.id

        return {
          이름, email, img, tel, 세부전공, 연구분야, 연구실, 학력,
          강의1, 강의2, 강의3, 강의4, 강의5,
          상담1, 상담2, 상담3, 상담4, 상담5, 승리횟수, 주요경력1, 주요경력2,
          주요경력3,
          연구실이름, ProfUID
        };
      })

      setProfData(prof)//prof 안에 해당 교수 정보 저장 

    }
    )
  }


  useEffect(() => {
    console.log("useEffect")
    findProfName();
    console.log("교수님이름은?:",profName)
    const showProf = async () => {

      const profRef = collection(db, "professor");
      const q = query(profRef, where("이름", "==", profName));
      await onSnapshot(q, (snapshot) => {
        
        const prof = snapshot.docs.map((doc) => {
          const { 이름, email, img, tel, 세부전공, 연구분야, 연구실, 학력,
            강의1, 강의2, 강의3, 강의4, 강의5,
            상담1, 상담2, 상담3, 상담4, 상담5, 승리횟수, 주요경력1, 주요경력2,
            주요경력3,
            연구실이름
          } = doc.data();
          const ProfUID = doc.id
          console.log("sds")

          return {
            이름, email, img, tel, 세부전공, 연구분야, 연구실, 학력,
            강의1, 강의2, 강의3, 강의4, 강의5,
            상담1, 상담2, 상담3, 상담4, 상담5, 승리횟수, 주요경력1, 주요경력2,
            주요경력3,
            연구실이름, ProfUID
          };
        })

        setProfData(prof)//prof 안에 해당 교수 정보 저장 

      }
      )
    }
    showProf();
  }, [profName])

  const findProfName =async()=>{

    const profUID=auth.currentUser.uid;
    const profNameRef = collection(db, "userProfile");
    const qq = query(profNameRef, where("userID", "==", profUID));

    await onSnapshot(qq, (snapshot) => {
      const doc = snapshot.docs[0];
      const {name} =doc.data();
      const ProfUID=doc.id;
      setProfName(name);
      console.log("findProfName이름!",name)
      setSearchInput(name);
    }
    )
    
      
  }





  return (
    <div className="card card2" id="box-1">
      <SecondNavBar /> {/*content*/}
      < div id="content-search">
        <div className="prof-container">

          {/*프로필 박스*/}
          <div
            id="prof-1"
            className="card"
            style={{
              width: "40rem"
            }}>
            <img src={profData[0]?.img} className="card-img-top" alt="..."></img>
            <h5 id="prof-title">{profData[0]?.이름} 교수님</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="badge rounded-pill text-bg-warning">전공</span>&nbsp;{profData[0]?.세부전공}</li>
              <li className="list-group-item">
                <span className="badge rounded-pill text-bg-warning">주요경력</span>
                <div>
                  {profData[0]?.주요경력1}
                  {profData[0]?.주요경력2}
                  {profData[0]?.주요경력3}
                </div>
              </li>
              <li className="list-group-item">
                <span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp; {profData[0]?.연구분야}</li>
              <li className="list-group-item">
                <span className="badge rounded-pill text-bg-warning">Tel</span>&nbsp; {profData[0]?.tel}</li>
              <li className="list-group-item">
                <span className="badge rounded-pill text-bg-warning">연구실</span>&nbsp; {profData[0]?.연구실이름}
                <div>
                  {profData[0]?.연구실}
                </div>
              </li>
            </ul>

            <div className="card-body">
              <p className="card-text">
                <i className="bi bi-check2-circle blue">강의st</i>
                <br></br>
                -{profData[0]?.강의1}<br></br>
                -{profData[0]?.강의2}<br></br>
                -{profData[0]?.강의3}<br></br>
                -{profData[0]?.강의4}<br></br>
                -{profData[0]?.강의5}<br></br>
                <br></br>
                <i className="bi bi-check2-circle blue">상담st</i>
                <br></br>
                -{profData[0]?.상담1}<br></br>
                -{profData[0]?.상담2}<br></br>
                -{profData[0]?.상담3}<br></br>
                -{profData[0]?.상담4}<br></br>
                -{profData[0]?.상담5}<br></br>
              </p>
            </div>
          </div>
        </div>

        {/*댓글*/}

        <CommentShowSearch name={searchInput} />

      </div >
    </div >
  )
}