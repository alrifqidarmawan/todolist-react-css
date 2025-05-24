import React from 'react'

const Student = ({ name, age, isStudent, major = 'Belum ada jurusan' }) => {
    const isValid = ((age) => {
        if (typeof age !== 'number') {
            return 'you have to input the right number'
        } else {
            return age
        }
    });

    const plusAge = (age) => {
        return age = age + 5;
    };

    return (
        <div>
            <p>Name: { name } </p>
            <p>Age: {isValid(age)} </p>
            <p>Student: { isStudent ? "yes" : "no"} </p>
            <p>Major: {major} </p>
            <p>Major: {plusAge(age)} </p>
        </div>
    );
}

export default Student
