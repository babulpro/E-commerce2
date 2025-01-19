 import MainNavBar from '@/components/Master/MainNavBar';
import React from 'react';
 async function getData() {
  let category =(await(await fetch('http://localhost:3000/api/dashBoard/category')).json()).data 
  return{
      category 
  }
}
 
 const Page = async() => { 
  let data =await getData()
  return (
    <div>
      <MainNavBar data={data.category}/>
      <h1>Page</h1>
    </div>
  );
 };
 
 export default Page;