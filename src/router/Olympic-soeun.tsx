import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import Timeline from "../component/timeline";
import { useEffect, useState,useRef } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Unsubscribe } from "firebase/auth";
import Tweet from "../component/tweet";

//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import  "../component/style.css"
import { useNavigate } from "react-router-dom";
import jsonData from "../assets/ProfDF.json"
//
const Div1=styled.div`
    border: 3px solid white;
`
//DB
const profDB= jsonData;


export default function Olympic_main(){
    const navigate=useNavigate();
    const [displayProf,setDisplayProf] =useState([]);
    //첨에 교수님 순서 랜덤 돌리기 
    const profArray=useRef([])
    const [Winners,setWinners]=useState([])
    const [round,setRound]=useState(1)
    const [isFinal,setIsFinal]=useState(0)
    const [finalText,setFinaltext]=useState("")//결승축하


    //첨에 시작할때 
    useEffect(()=>{
        profDB.sort(()=>Math.random()-0.5);
        profArray.current=profDB;
        setDisplayProf([profArray.current[0],profArray.current[1]])
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
                setFinaltext(picked.name+" 교수님이 우승했어요!!!")
                setDisplayProf([profArray.current[0]])
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

    return (
        <>
        <div className="card card2" id="box-1">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item" id="button-1" onClick={()=>toOlympic()}><span className="nav-link bg-red white">올림픽</span></li>
                    <li className="nav-item" id="button-2"><span className="nav-link bg-yellow white" onClick={()=>toSearch()} >교수진 검색</span></li>
                    <li className="nav-item" id="button-3"><span className="nav-link bg-green white" >etc</span></li>
                </ul>
            </div>
           
            <div id="content-olympic">
                <h3 id="round">Round {round}</h3>
                <h3 id="finalText"> {finalText}</h3>
                <div id="content">
                {/*여기서부터 반복*/}
                {displayProf.map((prof)=>{

                return(
                <div id="prof-1" className="card" style={{width: "18rem"}}>
                    <img src={prof.src} className="card-img-top" alt="..."></img>

                    <div className="card-body">
                    <h5 className="card-title">{prof.name}</h5>
                    <p className="card-text">
                    <i className="bi bi-check2-circle blue">강의st</i><br></br>
                    {prof.lectureSt.map((lecture)=>{
                        return(
                            <li>{lecture}</li>
                        )
                    })}
                    {/* - 꼼꼼하고 이해하기 쉬운 설명<br></br>
                    - 과제: 많은 편<br></br>
                    - 시험: 문제 알려줘서 부담이 적음<br></br>
                    - 감점 및 상세점수 공지<br></br> */}
                    <i className="bi bi-check2-circle blue">상담st</i>
                    {prof.cosultSt.map((consult)=>{
                        return(
                            <li>{consult}</li>
                        )
                    })}
                    </p>
                    </div>
                
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">전공</span>&nbsp;
                    {prof.major}
                    </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp;
                    {prof.researchField.map((field)=>{
                        return (
                                <span>{field}</span>
                        )
                    })}
                
                    </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">LAB</span>&nbsp; 
                    {prof.lab.map((lab)=>{
                        return (
                                <span>{lab}</span>
                        )
                    })}
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