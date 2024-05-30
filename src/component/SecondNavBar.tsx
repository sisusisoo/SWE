//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import { useNavigate } from "react-router-dom";
//import Olympic_soeun from "./Olympic_soeun"

//


export default function SecondNavBar(){
  const navigate=useNavigate();

  const toTournament=()=>{
    navigate("/Olympic_soeun")//olympilc-soeun
  }
  const toOlympic=()=>{
    navigate("/")//olympilc-soeun
  }
  const toSearch=()=>{
    navigate("/olympic_search")//olympilc-soeun
  }
  const toConsult=()=>{
    navigate("/olympic_consult")//olympilc-soeun
  }
  const toBoard=()=>{
    navigate("/olympic_board")//olympilc-soeun
  }
    return (
      <>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item" id="button-1" ><span className="nav-link bg-red white" onClick={()=>toOlympic()} >올림픽</span></li>
            <li className="nav-item" id="button-2"><span className="nav-link bg-yellow white" onClick={()=>toSearch()}>교수진 검색</span></li>
            <li className="nav-item" id="button-4"><a className="nav-link bg-green white" onClick={()=>toConsult()}>상담</a></li>
            <li className="nav-item" id="button-5"><a className="nav-link bg-blue white" onClick={()=>toBoard()}>게시판</a></li>
          </ul>
        </div>
      </>
    
    )
}