import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import Timeline from "../component/timeline";

const Wrapper=styled.div`
display:grid;
gap:50px;
grid-template-rows:1fr 5fr;
overflow-y: hidden;

`;


export default function Home(){
    
    return (

        <Wrapper>
           <PostTweetFrom/>
           <Timeline/>
        </Wrapper>
    )
    
}