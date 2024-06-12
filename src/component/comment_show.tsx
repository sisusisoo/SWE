import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query,where} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Comment from "./comment";

export interface IComment {
    id: string;
    comment: string;
    username: string;
    userId: string;
    createdAt: number;
    writeDate: string;
    profCategoty: string;
    writeCategory: string;
}

const Wrapper = styled.tr`
    border-style: solid;
    border-color: #ccc;
    border-width: 0;
`;

const No = styled.td`
    font-weight: bold;
    width: 50px;
`;

const Username = styled.td`
    width: 70px;
`;

const WriteDate = styled.td`
    width: 100px;
`;

const TableCell = styled.td``;

const CategoryTD = styled.td`
    width: 90px;
`;

const CategoryBtn = styled.button`
    font-size: medium;
    height: 25px;
    width: 65px;
    margin: 0px;
    padding: 0px;
`;

const PageBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export default function CommentShow() {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;
        const fetchComments = async () => {
            const commentQuery = query(
                collection(db, "comments"),
                orderBy("createdAt", "asc"),
                limit(30)
            );

            unsubscribe = onSnapshot(commentQuery, (snapshot) => {
                const comments = snapshot.docs.map((doc) => {
                    const { comment, createdAt, userId, username, writeDate, profCategoty, writeCategory } = doc.data();
                    return {
                        comment,
                        createdAt,
                        userId,
                        username,
                        writeDate,
                        profCategoty,
                        writeCategory,
                        id: doc.id,
                    };
                });
                setComments(comments);
            });
        };
        fetchComments();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    return (
        <>
            {comments.map((comment, index) => (
                <Wrapper key={comment.id}>
                    <No>{index + 1}</No>
                    <Username>{comment.username}</Username>
                    <WriteDate>{comment.writeDate}</WriteDate>
                    
                    
                    <CategoryTD>
                        <CategoryBtn className="btn btn-outline-secondary">{comment.writeCategory}</CategoryBtn>
                    </CategoryTD>
                    <No>{comment.profCategoty}</No>
                    <TableCell>
                        <Comment key={comment.id} {...comment} />
                    </TableCell>
                </Wrapper>
            ))}
        </>
    );
}
