import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button =styled.span`
background-color:#4682A9;
margin-top: 20px;
font-weight: 600;
width: 100%;
color:white;
padding: 10px 20px;
border-radius:50px;
border:0;
display: flex;
gap:5px;
align-items: center;
justify-content: center;
cursor:pointer;

`;

const Logo=styled.img`
height:25px
`;

export default function GithubButton(){
    const navigate=useNavigate();
    const onClick= async ()=>{
        try{
        const provider=new GithubAuthProvider();
        await signInWithPopup(auth,provider);// 리다이렉션 
        navigate("/");
        }catch(error){
            console.error(error);
        }

      
    };
    return <Button onClick={onClick}>
        <Logo src="/github-logo.svg"/>
        Continue with Github
    </Button>
}
//c47715cb7574ab144fd52a2ce992364283a479cb