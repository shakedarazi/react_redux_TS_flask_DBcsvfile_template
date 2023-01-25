import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import  Student  from '../../models/Student';
import { getStudents,addStudent,updStudent } from './studentAPI';

export interface StudentState {
    students: Student[]
    updateFlag:boolean
}

const initialState: StudentState = {
    students: [],
    updateFlag: false
};

export const getStudentsAsync = createAsyncThunk(
    'student/getStudents',
    async () => {
        const response = await getStudents();
        return response.data;
    }
);


export const updStudentAsync = createAsyncThunk(
    'student/updStudent',
    async (new_student: Student) => {
        const response = await updStudent(new_student);
        return response.data;
    }
);
export const addStudentAsync = createAsyncThunk(
    'student/addStudent',
    async (new_student: Student) => {
        const response = await addStudent(new_student);
        return response.data;
    }
);



export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getStudentsAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                //   state.status = 'idle';
                  state.students = action.payload;
            }) .addCase(addStudentAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                //   state.status = 'idle';
                  state.students.push( action.payload);
            }) .addCase(updStudentAsync.fulfilled, (state, action) => {
                // console.log(action.payload)
                //   state.status = 'idle';
                  state.updateFlag =! state.updateFlag;
            });

    },
});

export const { } = studentSlice.actions;
export const selectStudents = (state: RootState) => state.student.students;
export const selectUpdate = (state: RootState) => state.student.updateFlag;
export default studentSlice.reducer;
