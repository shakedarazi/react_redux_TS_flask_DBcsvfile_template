import  Student from "../../models/Student";
import axios from "axios";
const MY_SERVER = "http://127.0.0.1:5000/"
export function getStudents() {
    return new Promise<{ data: Student[] }>((resolve) =>
        axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
    );
}


export function addStudent(new_student:Student) {
    return new Promise<{ data: Student }>((resolve) =>
        axios.post(MY_SERVER +"add",new_student).then(res => resolve({ data: res.data }))
    );
}


export function updStudent(new_student:Student) {
    return new Promise<{ data: Student }>((resolve) =>
        axios.post(MY_SERVER +"upd",new_student).then(res => resolve({ data: res.data }))
    );
}
