// src/pages/DynamicQuestionPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import BackButton from "../../Components/BackButton/BackButton";
import Card from "../../Components/Card/Card";
import axios from 'axios';

const DynamicQuestionPage = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the answer as needed (e.g., store it, move to the next question)
    console.log('Submitted Answer:', answer);
  };

  return (
    <Layout>
      <div className="flex justify-center h-full items-center">
        <div className="m-3 w-full md:w-[calc(100%-30%)]">
          <BackButton />
          <form onSubmit={handleSubmit}>
            <Card question={question.prompt} subQuestion={question.category}>
              <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md'>
                Submit Answer
              </button>
            </Card>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DynamicQuestionPage;
