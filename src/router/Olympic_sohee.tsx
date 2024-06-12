//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import SecondNavBar from "../component/SecondNavBar";
import styled from 'styled-components';
import CommentShow from '../component/comment_show';
import { CommentInput } from '../component/comment_input';

const Wrapper = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
`;

const TableHeader = styled.th`
    font-weight: bold;
    border-color: #ccc;
    border-width: 0;
`;

export default function Olympic_sohee(){
    return (
        <Wrapper>
            <div className="card card2" id="box-1">
                <SecondNavBar/>
                <div id="content-comment">
                    <div className="comment">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <TableHeader>No.</TableHeader>
                                    <TableHeader>이름</TableHeader>
                                    <TableHeader>날짜</TableHeader>
                                    <TableHeader>&ensp;내용</TableHeader>
                                    <TableHeader>교수님</TableHeader>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                    <CommentShow/>
                            </tbody>
                        </table>
                    </div>

                    <div className="center">
                        <CommentInput/>
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
        </Wrapper>
    );
}