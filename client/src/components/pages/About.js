import React from 'react';
import Card  from '../Card/Card';
import './About.css'
function About(){
return(
  <div className="pa">
    <Card
    title='WHO ARE WE?'
    imageUrl='https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    body=' 
    We are a website that provides job opportunities for workers in many fields, 
    and this makes it easier for workers and saves them time and effort in searching for jobs'
    />
    <Card
      title='OUR GOALS'
      imageUrl='https://media.istockphoto.com/photos/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-picture-id1057484742?k=20&m=1057484742&s=612x612&w=0&h=iVCLJv8q6ktWFOyfzwaqRiQIa4iXfPG75dY37ivpz30='
      body='* Providing job opportunities for workers.
            * Save time and effort in searching for a job.'
    />
    <Card
      title='OUR MISSIONS'
      imageUrl='https://us.123rf.com/450wm/photochicken/photochicken2003/photochicken200300069/142368190-engineer-supervisor-admired-and-proud-his-worker-team-working-good-more-efficiently-.jpg?ver=6'
      body='When workers register on our site and join us, we approve them and then register their names and information in our application that users will use,
       so the user chooses the service he wants and then chooses the worker he wants based on specifications and dates, and 
      so we have provided a job opportunity for the worker and made it easy for the user to choose workers.'
    />

  </div>
)
}
export default About;