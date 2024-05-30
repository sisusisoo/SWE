import styled from "styled-components";
import { ITweet } from "./timeline"
import { auth, db, storage } from "../firebase";
import {  deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";   

const Wrapper=styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
padding:20px;
border:1px solid rsgba(200,200,200,0.5);
border-radius: 15px;
`;

const Column=styled.div``;

const Photo=styled.img`
width:100px;
height:100px;
border-radius: 15px;
`;

const Username = styled.span`
font-weight:600;
font-size: 15px;

`;

const Payload=styled.p`
margin:10px 0px;
font-size:18px;

`;
const DeleteButton = styled.button`
background-color: tomato;
font-weight: 600;
border:0;
font-size:12px;
padding:5px 10px;
text-transform: uppercase;
border-radius: 5px;
cursor:pointer;

`
;
const UpdateButton = styled.button`
background-color: #4787ff;
font-weight: 600;
border:0;
font-size:12px;
padding:5px 10px;
text-transform: uppercase;
border-radius: 5px;
margin-right: 10px;
cursor:pointer;

`
;

const TextArea=styled.textarea`
border:hidden;
padding:20px;
border-radius:20px;
font-size:16px;
color:white;
background-color:black;
width:100%;
resize:none;
&::placeholder{
    font-size:16px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
&:focus{
    outline:none;
    border-color: #1d9bf0;
}

`;


export default function Tweet({username,photo,tweet,userId,id}:ITweet){
    const user=auth.currentUser;
    const [update,setUpdate]=useState("");
    const [tweetU,setTweetU]=useState("");

    const onChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setTweetU(e.target.value);
    }


    const onDelete = async ()=>{
        const ok= confirm("Are you sure you want to delete this tweet?")
        
        if(!ok || user?.uid !== userId) return;
        try{
           await deleteDoc(doc(db,"tweets",id));

           if(photo){
            const photoRef =ref(storage,`tweets/${user.uid}/${id}`);
            await deleteObject(photoRef);
           }
        }catch(e){
            console.log(e);
        }finally{

        }
    };





    const toUpdate = async ()=>{
        if(user?.uid !== userId) return;

        try{
                setUpdate("updating");  
        }catch(e){
            console.log(e);
        }finally{

        }
    };

    const onUpdate = async ()=>{
        const ok= confirm("Are you sure you want to update this tweet?");
        
        if(!ok || user?.uid !== userId) return;

        try{
           const docRef=doc(db,"tweets",id);
                await updateDoc(docRef,{
                    tweet:tweetU,
                })

           setUpdate("");
        }catch(e){
            console.log(e);
        }finally{

        }
    };






    return (<Wrapper>
        <Column>
    <Username>{username}</Username>

    {update==="" ? <Payload>{tweet}</Payload>:
    <TextArea 
     required
     rows={5}
     maxLength={180}
     onChange={onChange}
     value={tweetU} placeholder={tweet}
    />}
    {(user?.uid === userId && update==="updating") ? <UpdateButton onClick={onUpdate}>Done</UpdateButton>:null}
    {(user?.uid === userId && update==="") ? <UpdateButton onClick={toUpdate}>Update</UpdateButton>:null}
    {(user?.uid === userId && update==="") ? <DeleteButton onClick={onDelete}>Delete</DeleteButton> : null}
    </Column>

    <Column>
    {photo?(
    <Photo src = {photo}/>
    ):null}
    </Column>
    </Wrapper>
    )

}