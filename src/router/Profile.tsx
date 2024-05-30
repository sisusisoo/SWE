import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { ITweet } from "../component/timeline";
import Tweet from "../component/tweet";

const Wrapper=styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap:20px;

`;

const AvatarUpload=styled.label`
width:80px;
overflow: hidden;
height:80px;
border-radius: 50%;
background-color: #1d9bf0;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
svg{
    width:100px;
    }
`;

const AvatarImg=styled.img`
width: 110%;
`;

const AvatarInput=styled.input`
display: none;
`;

const Name=styled.span`
font-size:22px;
`;

const Tweets=styled.div`
display:flex;
width: 100%;
flex-direction: column;
gap:10px;
`;

export default function Profile(){
    const user=auth.currentUser;
    const [avatar,setAvatar]=useState(user?.photoURL);
    const [tweets,setTweets] = useState<ITweet[]>([]);
    const onAvatarChange=async (e:React.ChangeEvent<HTMLInputElement>)=>{

        const {files} =e.target;
        if(!user) return;
   
        if(files && files.length ===1 ){
            const file=files[0];
            const locationRef=ref(storage,`avatars/&{user?.uid}`);
            const result =await uploadBytes(locationRef,file);

            const avatarUrl =await getDownloadURL(result.ref);
            setAvatar(avatarUrl);
            await updateProfile(user,{
                photoURL:avatarUrl
            })
        }

    }
    const fetchTweets = async ()=>{
        const tweetQuery=query(
            collection(db,"tweets"),
            where("userId","==",user?.uid),
            orderBy("createdAt","desc"),
            limit(25)
        );
        const snapshot=await getDocs(tweetQuery);
        const tweets =snapshot.docs.map((doc)=>{

             const {tweet,createdAt,userId,username,photo} = doc.data();
                 return {
                    tweet,
                 createdAt,
                 userId,
                username,
                photo,
                id:doc.id
            };
        });
        setTweets(tweets);
    };
    useEffect(()=>{
        fetchTweets();
    },[]);

    
    return (
    <Wrapper>

    <AvatarUpload htmlFor="avatar">

    {avatar ? (<AvatarImg src = {avatar}/>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
</svg>

)
}
    </AvatarUpload>

    <AvatarInput 
    onChange={onAvatarChange}
    id ="avatar" type="file" accept="image/*"/>
    <Name>
        {user?.displayName ?? "Anonymous"}

    </Name>
    <Tweets>
    {tweets.map((tweet) =>(<Tweet key ={tweet.id} {...tweet}/>
    ))}
    </Tweets>
    </Wrapper>
    )

} ;