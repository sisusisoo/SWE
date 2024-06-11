import { useState } from "react";
import { auth, db } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import styled from "styled-components";
import { IComment } from "./comment_show";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Payload=styled.p`
    margin: 0px;
    font-size: 16px;
`;

const UpdateBtn = styled.i`
    &:hover {
        color: #0c6efd;
        cursor: pointer;
    }
`;

const DeleteBtn = styled.i`
    &:hover {
        color: #d33636;
        cursor: pointer;
    }
`;

const TextArea = styled.textarea`
    border-style: solid;
    border-color: #ccc;
    border-width: 1px;
    padding: 5px;
    font-size: 16px;
    width: 80%;
    &::placeholder{
        font-size: 16px;
        font-family: "Noto Sans KR", sans-serif;
    }
    &:focus{
        outline: none;
        border-color: #95c0dd;
    }
`;

export default function Comment({userId, id, username, writeDate, profCategory, writeCategory, comment } : IComment) {
    const user = auth.currentUser;
    const [isUpdating, setIsUpdating] = useState(false);
    const [commentU, setCommentU] = useState(comment);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentU(e.target.value);
    }

    const toUpdate = async () => {
        setIsUpdating(true);
    };

    const onUpdate = async () => {
        const ok = confirm("Are you sure you want to update this comment?");
        if (!ok || user?.uid !== userId) return;
        try {
            const docRef = doc(db, "comments", id);
                await updateDoc(docRef, {
                    comment: commentU,
                });
            setIsUpdating(false);
        } catch (e) {
            console.log(e);
        } finally {
            //
        }
    };

    const onDelete = async () => {
        const ok = confirm("Are you sure you want to delete this comment?");
        if (!ok || user?.uid !== userId) return;
        try {
            await deleteDoc(doc(db, "comments", id));
        } catch (e) {
            console.log(e);
        } finally {
            //
        }
    };

    return (
        <Wrapper>
            {isUpdating ? (
                <TextArea
                    required
                    rows={2}
                    maxLength={180}
                    onChange={onChange}
                    value={commentU}
                    placeholder="Update your comment"
                />
            ) : (<Payload>{comment}</Payload>)
            }&nbsp;
            {user?.uid === userId && (
                <>
                    {isUpdating ? (
                        <UpdateBtn onClick={onUpdate} className="bi bi-pencil-fill"></UpdateBtn>
                    ) : (
                        <UpdateBtn onClick={toUpdate} className="bi bi-pencil-fill"></UpdateBtn>
                    )}&nbsp;
                    <DeleteBtn onClick={onDelete} className="bi bi-trash3-fill"></DeleteBtn>
                </>
            )}
        </Wrapper>
    );
}