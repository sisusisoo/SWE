
//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import { useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar" 
//import Olympic_soeun from "./Olympic_soeun"

//


export default function Olympic_board(){
  const navigate=useNavigate();

    return (
   
        <div className="card card2" id="box-1">
            <SecondNavBar/>
            <div id="content-comment">
                <div className="comment">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col" className="col-no">No.</th>
                        <th scope="col" className="col-name">이름</th>
                        <th scope="col" className="col=date">날짜</th>
                        <th scope="col">내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>김철수</td>
                        <td>21.05.31</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">주홍택</a>&nbsp;
                        네트워크 출석체크 매번 안해요! 랜덤임&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>이훈이</td>
                        <td>24.01.15</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">남재열</a>&nbsp;
                        상담시간 맞춰서 갔는데 안계셨어요 ㅠㅠ&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        운영체제 - linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        PPT 자료 미리 올려주셔서 교재 굳이 안 사도 돼요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">강수명</a>&nbsp;
                        주변에서 상담 추천해 줘서 갔는데 친절하시고 좋았어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">강수명</a>&nbsp;
                        이산수학 - 매 단원 수기로 요약하는 과제 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>맹구</td>
                        <td>24.5.14</td>
                        <td>
                        <a href="#" className="btn btn-outline-secondary name">박세진</a>&nbsp;
                        linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                        <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                        <i className="bi bi-trash3-fill on-red"></i></td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="center">
                
                <form className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="col-12">
                    <div className="input-group">
                        <div className="input-group-text">내용</div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" style={{width: "800px"}}></input>
                    </div>
                    </div>
                <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                    <select className="form-select" id="inlineFormSelectPref">
                    
                    <option value="1">고병철</option>
                    <option value="2">남재열</option>
                    <option value="3">박세진</option>
                    <option value="4">박요한</option>
                    <option value="5">사공상욱</option>
                    <option value="6">이덕우</option>
                    <option value="7">주홍택</option>
                    <option value="8">홍동권</option>
                    <option value="9">Gustavo</option>
                    <option value="10">강수명</option>

                    </select>
                </div>
                    <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                    <select className="form-select" id="inlineFormSelectPref">
                        <option selected>카테고리</option>
                        <option value="1">강의</option>
                        <option value="2">상담</option>
                    </select>
                    </div>
                
                
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

                
                
                </div>
                <div className="page-next center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
          
        </div>        
    </div>

    
    )
}