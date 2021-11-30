import React from 'react';
import Card  from '../Card/Card';
import './About.css'
function About(){
return(
  <div className="pa">
    <Card
    title='Card title'
    imageUrl='https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    body='We are workers website'
    />

    <Card
      title='Card title'
      imageUrl='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      body='We are workers website'
    
    />
     <Card
      title='Card title'
      imageUrl='https://images.unsplash.com/photo-1507126694149-a8685f99aa4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80'
      body='We are workers website'
    
    />
  </div>
)
}
export default About;