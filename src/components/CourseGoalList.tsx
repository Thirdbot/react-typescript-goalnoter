import CourseGoal from "./CourseGoal"
import { type CourseGoalData } from "../App"

type CourseGoalList = {
  goals:CourseGoalData[];
  onDelete: (id:number) => void;
}

export default function CourseGoalList({goals,onDelete}:CourseGoalList) {
    return (
        <ul>
        {goals.map((goal)=>(
          <li key={goal.id}>
            < CourseGoal id={goal.id} title={goal.title} description={goal.description} onDelete={onDelete}> 
            </CourseGoal> 
            
          </li>
        ))}
      </ul>
    )
}