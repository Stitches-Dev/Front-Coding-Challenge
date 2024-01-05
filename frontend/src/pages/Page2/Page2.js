import React,{ useState, useEffect} from "react";
import Layout from "../../Components/Layout/Layout";
import BackButton from "../../Components/BackButton/BackButton";
import Card from "../../Components/Card/Card";
// import axios from 'axios'
export default function Page2() {
    
  return (
    <Layout>
      <div className="flex justify-center h-full items-center">
        <div className="m-3 w-full md:w-[calc(100%-30%)]">
          <BackButton />
          <form action="POST">
          <Card question={'How appealing is engaging in artistic activitites like painting or sculpture'} >
{/* <input /> */}
          </Card>
          </form>
        </div>
      </div>
    </Layout>
  );
}
