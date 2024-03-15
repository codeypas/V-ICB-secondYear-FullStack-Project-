// Faculty.js
import React from 'react';
import './Faculty.css'; // Import CSS file for styling

function Faculty() {
    return (
        <div className="faculty_container">
            <div className="faculty_content">
                <h1>FACULTY</h1>
            </div>
            <div className='prof'>
            <div className="card_content cat1">
                
                <img src="https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=aiss" alt="hod" />
                <h3>HOD</h3>
                <p>Nagaratna</p>
                
            </div>
            <div className="card_content cat2">
                
                <img src="https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=aiss" alt="hod" />
                <h3>Professor</h3>
                <p>krupa</p>
                
            </div>
            <div className="card_content cat3">
                
                <img src="https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=aiss" alt="hod" />
                <h3>Professor</h3>
                <p>Manjula M</p>
                
            </div>
            </div>
        </div>
    );
}

export default Faculty;
