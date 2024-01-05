import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import Card from '../../Components/Card/Card';
import BackButton from '../../Components/BackButton/BackButton';
import axios from 'axios';
import Button from '../../Components/Button/Button';

export default function Page1() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
    };

    try {
      setSubmitting(true);

      const response = await axios.post('http://192.168.18.111:8000/career-test/launch-test', formData);

      // Handle success, e.g., redirect to the next page
      console.log('Form submitted successfully', response.data);

      // Provide feedback to the user (e.g., show success message)
    } catch (error) {
      // Handle error and provide feedback to the user
      console.error('An error occurred during form submission:', error);
    } finally {
      setSubmitting(false);
    }
  };

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
                  onChange={(e) => setFullName(e.target.value)}
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
