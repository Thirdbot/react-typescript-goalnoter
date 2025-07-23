import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import goalImage from "./assets/goals.jpg";
import { useState } from "react";

export type CourseGoalData = {
  title:string;
  description:string;
  id:number;
}

export default function App() {
  const [goals,setGoals] = useState<Array<CourseGoalData>>([]);

  function deleteGoalHandler(id:number) {
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id != id))
  }
  function addGoalHandler(goal:string, summary:string) {
    const newGoal:CourseGoalData = {
      id:Math.random(),
      title: goal,
      description:summary
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
      <NewGoal onAddGoal={addGoalHandler}/>
      <CourseGoalList goals={goals} onDelete={deleteGoalHandler}/>
      
    </main>
  )
}