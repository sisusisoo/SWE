

import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    Error,
    Form,
    Input,
    Switcher,
    Title,
    Wrapper
} from "../component/auth-component"
import GithubButton from "../component/github-btn";

//추가 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/style.css"
import logo from "../assets/img/olympics.png"


export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        console.log(name, email, password);
        if (isLoading || email === "" || password === "") return;// loading 중일때 종료 

        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
                console.log(e.code, e.message);

            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <nav className="navbar bg-blue">
                <div id="nav" className="container-fluid">
                    <img src= {logo} alt="Logo" id="logo" className="d-inline-block align-text-top"></img>
                </div>
            </nav>
            <div className="center login" id="content-login">

                <form onSubmit={onSubmit}>
                    <Title>로그인</Title><br></br>
                    <label htmlFor="InputId" className="form-label">ID</label>
                    <input onChange={onChange} className="form-control" name="email" value={email} placeholder="Email" type="email" required />
                    <label htmlFor="InputPassword" className="form-label">PW</label>
                    <input onChange={onChange}
                        className="form-control"
                        value={password}
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <br></br><br></br>
                    {/* <button type="submit" className="btn btn-primary">로그인</button> */}
                    <button type="submit" className="btn btn-primary" value={isLoading ? "Loading..." : "Log in"}>로그인</button>
                    <br></br><br></br>
                    {/* <a className="icon-link" href="./register.html">회원가입</a> */}
                    {error !== "" ? <Error>{error}</Error> : null}
                    <Link to="/create_accountSWE"> 회원가입</Link>
                    <GithubButton />
                </form>

            </div>
        </>
    )
}