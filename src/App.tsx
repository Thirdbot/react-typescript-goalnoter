import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import goalImage from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoalData = {
  title:string;
  description:string;
  id:number;
}

export default function App() {
  const [goals,setGoals] = useState<Array<CourseGoalData>>([]);

  function addGoalHandler() {
    const newGoal:CourseGoalData = {
      id:Math.random(),
      title:"Learn React + TS",
      description:"Learn it in depth!"
    };

    setGoals(prevgoals=>{
      return [...prevgoals,newGoal];
    })
  }

  return (
    <main>
      <Header image={{src:goalImage,alt:'A list of goals'}}>
        <h1>your Course Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoalList goals={goals}/>
      
    </main>
  )
}