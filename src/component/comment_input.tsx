import { useState } from "react";
import moment from "moment";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";

export type ProfCategory = {
    id: number;
    label: string;
}

const profCategoryList: ProfCategory[] = [
    {id: 0, label: "교수 선택"},
    {id: 1, label: "강수명"},
    {id: 2, label: "고병철"},
    {id: 3, label: "남재열"},
    {id: 4, label: "박세진"},
    {id: 5, label: "박요한"},
    {id: 6, label: "사공상욱"},
    {id: 7, label: "이덕우"},
    {id: 8, label: "주홍택"},
    {id: 9, label: "홍동권"},
    {id: 10, label: "Gustavo"},
]

export type WriteCategory = {
    id: number;
    label: string;
}

const writeCategoryList: WriteCategory[] = [
    {id: 0, label: "카테고리"},
    {id: 1, label: "강의"},
    {id: 2, label: "상담"},
]

export function CommentInput() {
    const [isLoading, setLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [selectedProf, setSelectedProf] = useState<ProfCategory>(profCategoryList[0]);
    const [selectedWrite, setSelectedWrite] = useState<WriteCategory>(writeCategoryList[0]);

    const onChangeProfCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const prof = profCategoryList.find(p => p.id === Number(e.target.value));
        if (prof) setSelectedProf(prof);
    };

    const onChangeWriteCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const write = writeCategoryList.find(w => w.id === Number(e.target.value));
        if (write) setSelectedWrite(write);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;
        if (!user || isLoading || comment === "" || comment.length > 180 || selectedProf.id === 0 || selectedWrite.id === 0) return;
        try {
            setLoading(true);
            const doc = await addDoc(collection(db, "comments"), {
                comment,
                createdAt: Date.now(),
                username: user.displayName || "Anonymous",
                userId: user.uid,
                writeDate: moment().format('YY.MM.DD'),
                profCategoty: selectedProf.label,
                writeCategory: selectedWrite.label,
            });
            setComment("");
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className="row row-cols-lg-auto g-3 align-items-center">
            <div>
                <div className="input-group">
                    <div className="input-group-text">내용</div>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inlineFormInputGroupUsername" 
                        style={{width: "800px"}}
                        value={comment}
                        onChange={onChange}
                    />
                </div>
            </div>
        
            <div>
                <label className="visually-hidden" htmlFor="profCategorySelect">Professor</label>
                <select 
                    className="form-select" 
                    id="profCategorySelect" 
                    value={selectedProf.id} 
                    onChange={onChangeProfCategory}
                >
                    {profCategoryList.map(prof => (
                        <option key={prof.id} value={prof.id}>{prof.label}</option>
                    ))}
                </select>
            </div>
        
            <div>
                <label className="visually-hidden" htmlFor="writeCategorySelect">Category</label>
                <select 
                    className="form-select" 
                    id="writeCategorySelect" 
                    value={selectedWrite.id} 
                    onChange={onChangeWriteCategory}
                >
                    {writeCategoryList.map(write => (
                        <option key={write.id} value={write.id}>{write.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}
