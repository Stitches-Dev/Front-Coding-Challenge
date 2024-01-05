import React, { useState } from 'react';
import BackButton from '../BackButton/BackButton';
import { useDispatch } from 'react-redux';
import { setExamineeId } from '../../../redux/Examinee/action';
import { setTestId } from '../../../redux/Test/action';
import Button from '../../Button/Button';
function TellUsAboutYourself() {
    const dispatch = useDispatch();
    const [examineeData, setexamineeData] = useState({
        email: '',
        name: '',
    });
    const { email, name } = examineeData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setexamineeData({ ...examineeData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the user's email and password
        const credentials = {
            name,
            email
        };

        try {
            // Send a POST request to your authentication endpoint
            const response = await fetch('http://192.168.18.111:8000/career-test/launch-test', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });

            if (response.ok) {

                const data = await response.json();
                const test_id = data.test_id;
                const examinee_id = data.examinee_id;
                dispatch(setTestId(test_id))
                dispatch(setExamineeId(examinee_id))
            } else {
                console.error('AN ERROR OCCURED');

            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="page-cotainer">
            <BackButton />
            <div className='TellUs'>
                <h1>Tell Us About Yourself     </h1>
                <label className="TellUs-label">
                    <input
                        className="TellUs-input"
                        type="text"
                        name={name}
                        placeholder="name"
                        value={examineeData.name}
                        onChange={handleChange}
                    />
                </label>
                <label className="TellUs-label">
                    <input
                        className="TellUs-input"
                        type="text"
                        name={email}
                        placeholder="email"
                        value={examineeData.email}
                        onChange={handleChange}
                    />
                </label>
                <Button onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default TellUsAboutYourself;
