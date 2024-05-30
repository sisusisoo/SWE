//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import "../component/style.css"
import {useNavigate} from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar"

//import Olympic_soeun from "./Olympic_soeun"

export default function Olympic_search() {

    return (
        <div className="card card2" id="box-1">
            <SecondNavBar/> {/*content*/}
            < div id="content-search">
                <div className="prof-container">
                    {/*검색 박스*/}
                    <div className="search-box" id="content-search">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                    {/*프로필 박스*/}
                    <div
                        id="prof-1"
                        className="card"
                        style={{
                            width: "40rem"
                        }}>
                        <img src="./img/담곰2.jpg" className="card-img-top" alt="..."></img>
                        <h5 id="prof-title">박요한 교수님</h5>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="badge rounded-pill text-bg-warning">전공</span>&nbsp; 전자전기컴퓨터</li>
                            <li className="list-group-item">
                                <span className="badge rounded-pill text-bg-warning">주요경력</span>
                                <div>
                                    • 2019년 9월 ~ 현재 : 계명대학교 공과대학 컴퓨터공학전공 조교수<br/>
                                    • 2017년 ~ 2019년 : 나사렛대학교 조교수
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp; 정보보안</li>
                            <li className="list-group-item">
                                <span className="badge rounded-pill text-bg-warning">Tel</span>&nbsp; (+82) 53-580-5270</li>
                            <li className="list-group-item">
                                <span className="badge rounded-pill text-bg-warning">연구실</span>&nbsp; 공학1관 1319호
                                <div>
                                    • 상세 연구실 정보 내용
                                </div>
                                <button
                                    id="toggle-lab"
                                    className="btn btn-link"
                                    style={{
                                        display: "block",
                                        marginTop: "10px"
                                    }}>자세히보기</button>
                            </li>
                        </ul>

                        <div className="card-body">
                            <p className="card-text">
                                <i className="bi bi-check2-circle blue">강의st</i>
                                <br></br>
                                - 꼼꼼하고 이해하기 쉬운 설명<br></br>
                                - 과제: 많은 편<br></br>
                                - 시험: 문제 알려줘서 부담이 적음<br></br>
                                - 감점 및 상세점수 공지<br></br>
                                <br></br>
                                <i className="bi bi-check2-circle blue">상담st</i>
                                <br></br>
                                - 꼼꼼하고 이해하기 쉬운 설명<br></br>
                                - 과제: 많은 편<br></br>
                                - 시험: 문제 알려줘서 부담이 적음<br></br>
                                - 감점 및 상세점수 공지<br></br>
                            </p>
                        </div>
                    </div>
                </div>

                {/*댓글*/}
                < div className="comment">
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
                                    <a href="#" className="btn btn-outline-secondary name">박요한</a>&nbsp; 출석체크 매번 안해요! 랜덤임&nbsp;
                                    <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                    <i className="bi bi-trash3-fill on-red"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>이훈이</td>
                                <td>24.01.15</td>
                                <td>
                                    <a href="#" className="btn btn-outline-secondary name">박요한</a>&nbsp; 상담시간 맞춰서 갔는데 안계셨어요 ㅠㅠ&nbsp;
                                    <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                    <i className="bi bi-trash3-fill on-red"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>맹구</td>
                                <td>24.5.14</td>
                                <td>
                                    <a href="#" className="btn btn-outline-secondary name">박요한</a>&nbsp; linux vim환경에서 C언어로 하는 코딩 과제 매주 있어요&nbsp;
                                    <i className="bi bi-pencil-fill on-blue"></i>&nbsp;
                                    <i className="bi bi-trash3-fill on-red"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}