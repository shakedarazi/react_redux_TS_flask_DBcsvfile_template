import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import StudentModel from '../../models/Student';
import { getStudentsAsync, selectStudents, addStudentAsync,updStudentAsync,selectUpdate } from './studentSlice';
export function Student() {
    const students = useAppSelector(selectStudents);
    const updFlag = useAppSelector(selectUpdate);

    const dispatch = useAppDispatch();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [math, setmath] = useState(0)
    const [comp, setcomp] = useState(0)
    const [eng, seteng] = useState(0)
    const [search, setsearch] = useState("")
    const build_student = () => {
        console.log("test")
        const temp_student: StudentModel = { email, name, grades: [
           {  name: "computers", grade: comp },
            { name: "math", grade: math },
            { name: "english", grade: eng }] }
        dispatch(addStudentAsync(temp_student))

    }
    const upd_grade = (uName:string,old_email:string) => {
        console.log("test")
        const temp_student: StudentModel = { email:old_email,name: uName, grades: [
           {  name: "computers", grade: comp },
            { name: "math", grade: math },
            { name: "english", grade: eng }] }
        dispatch(updStudentAsync(temp_student))

    }
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [updFlag])

    return (
        <div>
            Search:<input onChange={(e)=>setsearch(e.target.value)}/>
            Student<br></br>
            name: <input onChange={(e) => setname(e.target.value)} />
            email:  <input onChange={(e) => setemail(e.target.value)} />
            <hr></hr>
            Grades<br></br>
            math  <input onChange={(e) => setmath(+e.target.value)} />
            comp<input onChange={(e) => setcomp(+e.target.value)} />
            eng <input onChange={(e) => seteng(+e.target.value)} />
            <button onClick={() => build_student()}>Add</button>
            
            <hr></hr>
            {students.filter(stu=> stu.name.includes(search)).map((stu, i) => <div key={i}>
                Name: {stu.name},
                email: {stu.email},
                grades :{stu.grades && stu.grades.map((gr, i) => <div key={i}>{gr.grade> 0 && gr.name}  {gr.grade> 0 && gr.grade}</div>)}
                <button onClick={() => upd_grade(stu.name,stu.email)}>upd_grade</button>
            </div>)}
        </div>
    );
}
