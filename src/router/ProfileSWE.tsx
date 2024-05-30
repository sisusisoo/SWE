
//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import { useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar" 
//import Olympic_soeun from "./Olympic_soeun"

//


export default function Olympic_main(){
  const navigate=useNavigate();

    return (
      <>
        <div className="card card2" id="box-1">
            <SecondNavBar/>
            {/*content */}
            <div id="content-profile" className="prof-container">
            <div id="prof-1" className="card" style={{width: "40rem"}}>
                <img src="./img/담곰2.jpg" className="card-img-top" alt="..."></img>

                <h5 id="prof-title">박요한 교수님</h5>

                <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">학력</span>&nbsp; 경북대학교, 공학박사 (2013)</li>
                <li className="list-group-item">
                    <span className="badge rounded-pill text-bg-warning">주요경력</span>
                    <div>
                    • 2019년 9월 ~ 현재 : 계명대학교 공과대학 컴퓨터공학전공 조교수
                    </div>
                    <div id="career-details" style={{display: "none"}}>
                    • 2017년 ~ 2019년 : 나사렛대학교 조교수
                    </div>
                    <button id="toggle-career" className="btn btn-link">자세히보기</button>
                </li>
                <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp; 정보보안</li>
                <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">Tel</span>&nbsp; (+82) 53-580-5270</li>
                <li className="list-group-item">
                    <span className="badge rounded-pill text-bg-warning">연구실</span>&nbsp; 공학1관 1319호
                    <div id="lab-details" style={{display: "none", marginTop: "10px"}}>
                    • 상세 연구실 정보 내용
                    </div>
                    <button id="toggle-lab" className="btn btn-link" style={{display: "block", marginTop: "10px"}}>자세히보기</button>
                </li>
                </ul>
            </div>
            <button type="button" id="modify" className="btn btn-primary">수정</button>
            </div>
        </div>
      </>
    
    )
}