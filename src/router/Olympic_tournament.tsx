import styled from "styled-components";
import { useEffect, useState,useRef } from "react";
import { collection, limit, onSnapshot, orderBy, query,where,doc, updateDoc,increment,getDoc} from "firebase/firestore";
import { db } from "../firebase";
import { Unsubscribe } from "firebase/auth";
import Tweet from "../component/tweet";
import SecondNavBar from "../component/SecondNavBar" 

//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';  
import  "../component/style.css"
import { useNavigate } from "react-router-dom";
import jsonData from "../assets/ProfDF.json"
//
const Div1=styled.div`
    border: 3px solid white;
`
//DB
const profDB= jsonData;

//Firebase DB
export interface ProfDB {//export
    이름: string,
    email: string,
    img: string,
    tel: string,
    세부전공: string,
    연구분야: string,
    연구실: string,
    학력:string,
    강의1:string,
    강의2:string,
    강의3:string,
    강의4:string,    
    강의5:string,
    상담1:string,
    상담2:string,
    상담3:string,
    상담4:string,
    상담5:string,
    승리횟수:number,
    연구실이름:string

    
  }
  


export default function Olympic_tournament(){
    let unsubscribe: Unsubscribe | null = null;
    const navigate=useNavigate();
    const [displayProf,setDisplayProf] =useState([]);
    //첨에 교수님 순서 랜덤 돌리기 
    const profArray=useRef<ProfDB[]>([])
    const [Winners,setWinners]=useState([])
    const [round,setRound]=useState(1)
    const [isFinal,setIsFinal]=useState(0)
    const [finalText,setFinaltext]=useState("")//결승축하


    //첨에 시작할때 
    // useEffect(()=>{
    //     profDB.sort(()=>Math.random()-0.5);
    //     profArray.current=profDB;
    //     setDisplayProf([profArray.current[0],profArray.current[1]])
    // },[])

    useEffect(()=>{
    const fetchData=async () => {
    const profQuery=query(
        collection(db, "professor"),
        orderBy("이름", "desc"),//이것도 램덤으로 한번 
        limit(8)
    )

    unsubscribe = await onSnapshot(profQuery, (snapshot) => {
        const prof = snapshot.docs.map((doc) => {
          const { 이름,email,img,tel,세부전공,연구분야,연구실,학력,
            강의1,강의2,강의3,강의4,강의5,
            상담1,상담2,상담3,상담4,상담5,승리횟수,
            연구실이름
          } = doc.data();
          console.log("Sdsd",doc.id)
          return {
            이름,email,img,tel,세부전공,연구분야,연구실,학력, 
            강의1,강의2,강의3,강의4,강의5,
            상담1,상담2,상담3,상담4,상담5,승리횟수,
            연구실이름
          };
        })
        profArray.current=prof.sort(()=>Math.random()-0.5);

        setDisplayProf([profArray.current[0],profArray.current[1]])    
    }   
    )
    }
    fetchData();
    
    },[])





    //선택하면 어떻게 지우지... 배열 항목제거// 배열안에 하나만 남으면 navigate

    const toOlympic=()=>{
        navigate("/olympic")//olympilc-soeun
      }
    const toSearch=()=>{
        navigate("/soeun_search")//olympilc-soeun
    }

    const pick = (picked)=>()=>{
        if(profArray.current.length <=2){
            setRound(round+1)
            if(Winners.length ===0){
                setIsFinal(1)
                setFinaltext(picked.이름+" 교수님이 우승했어요!!!")
                profArray.current=[picked];
                setDisplayProf([profArray.current[0]])
                updateWinCounter(profArray.current[0].이름)
            }
            else{
                
                profArray.current=[...Winners,picked];//승자들끼리 다시 시작 마지막 주자 picked 까지 넣으면서 
                setDisplayProf([profArray.current[0],profArray.current[1]])
                setWinners([])
            }
        }
        else if(profArray.current.length > 2){
            setWinners([...Winners,picked])     
            profArray.current=profArray.current.slice(2);       //2번째 부터 저장 !!!!!!!!!!!
            setDisplayProf([profArray.current[0],profArray.current[1]])

        }
    }
    const updateWinCounter = async(prof) =>{
        const q = query(collection(db, "professor"), where("이름", "==", prof));
        // const querySnapshot = await getDocs(q);


      const winnerProfRef=doc(db,"professor",prof);//이거 쿼리로 바꾸기
      await updateDoc(winnerProfRef,{   
        승리횟수:increment(1),
      })

    }

    return (
        <>
        <div className="card card2" id="box-1">
           <SecondNavBar/>
           
            <div id="content-olympic">
                <h3 id="round">Round {round}</h3>
                <h3 id="finalText"> {finalText}</h3>
                <div id="content">
                {/*여기서부터 반복*/}
                {displayProf.map((prof)=>{

                return(
                <div id="prof-1" className="card" style={{width: "18rem"}}>
                    <img src={prof.img} className="card-img-top" alt="..."></img>

                    <div className="card-body">
                    <h5 className="card-title">{prof.이름}</h5>
                    <p className="card-text">
                    <i className="bi bi-check2-circle blue">강의st</i><br></br>
                    -{prof.강의1}<br></br>
                    -{prof.강의2}<br></br>
                    -{prof.강의3}<br></br>
                    -{prof.강의4}<br></br>
                    -{prof.강의5}<br></br>
                    {/* {prof.lectureSt.map((lecture)=>{
                        return(
                            <li>{lecture}</li>
                        )
                    })} */}
                    {/* - 꼼꼼하고 이해하기 쉬운 설명<br></br>
                    - 과제: 많은 편<br></br>
                    - 시험: 문제 알려줘서 부담이 적음<br></br>
                    - 감점 및 상세점수 공지<br></br> */}
                    <br/>
                    <i className="bi bi-check2-circle blue">상담st</i><br/>
                    -{prof.상담1}<br></br>
                    -{prof.상담2}<br></br>
                    -{prof.상담3}<br></br>
                    -{prof.상담4}<br></br>
                    -{prof.상담5}<br></br>
                    {/* {prof.cosultSt.map((consult)=>{
                        return(
                            <li>{consult}</li>
                        )
                    })} */}
                    </p>
                    </div>
                
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">전공</span>&nbsp;
                    {prof.세부전공}
                    </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp;
                    {/* {prof.연구분야.map((field)=>{
                        return (
                                <span>{field}</span>
                        )
                    })} 
                 */}
                    {prof.연구분야}
                    </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">LAB</span>&nbsp; 
                    {prof.연구실이름}<br/>
                    {prof.연구실}<br/>
                    </li>
                    </ul>

                    <div className="card-body">
                    {isFinal !==1 ? <button type="button" onClick={pick(prof)} id="choice" className="btn btn-primary">Choice</button>
                    :null}
                    
                    </div>
                </div>
                )
            })}
                  {/*여기까지 반복*/}
            </div>
        </div>
        </div>
        </>
    )
}