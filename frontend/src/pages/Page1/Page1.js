import React, { useState,useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import Card from '../../Components/Card/Card';
import BackButton from '../../Components/BackButton/BackButton';
import axios from 'axios';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router';

export default function Page1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [questions,setQuestion] = useState();
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
     name: name,
     email: email,
    };

    try {
      setSubmitting(true);

      const response = await axios.post('http://192.168.18.111:8000/career-test/launch-test', formData);

      // Handle success, e.g., redirect to the next page
      console.log('Form submitted successfully', response.data);
      // navigate.push(`/question/${response.data.questionId}`);

      // Provide feedback to the user (e.g., show success message)
    } catch (error) {
      // Handle error and provide feedback to the user
      console.error('An error occurred during form submission:', error);
    } finally {
      setSubmitting(false);
    }
  };
  // useEffect(() => {
  //   // Fetch a specific question based on questionId from the API
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await axios.get(`http://192.168.18.111:8000/career-test`);
  //       setQuestion(response.data);
  //     } catch (error) {
  //       console.error('Error fetching question:', error);
  //     }
  //   };

  //   fetchQuestions();
  // }, []);

  return (
    <Layout>
      <div className='flex justify-center h-full items-center'>
        <div  className='m-3 w-full md:w-[calc(100%-30%)]'>
          <BackButton />
          <form onSubmit={handleSubmit} action='POST'>
            <Card question={'Tell Us About Yourself'} subQuestion={'Your  Details Personalize Your  Journey and Enhance Accuracy, Securely Stored And Private'}>
              <>
                <span className='font-bold text-xs'>Full Name</span>
                <input
                  type='text'
                  className='border-[3px]  w-full border-black rounded-15 p-2 mb-3'
                  onChange={(e) => setName(e.target.value)}
                  placeholder='eg: James johnes'
                />
                <span className='font-bold text-xs'>Email</span>
                <input
                  type='email'
                  className='border-[3px]  w-full border-black rounded-15 p-2 mb-3'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='eg: email@example.com'
                />
                <Button width={'100%'} color={'var(--lightGreen)'} disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Next Question'}
                </Button>
              </>
            </Card>
          </form>
        </div>
      </div>
    </Layout>
  );
}
