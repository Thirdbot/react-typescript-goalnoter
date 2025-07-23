import CourseGoal from "./CourseGoal"
import { type CourseGoalData } from "../App"

type CourseGoalList = {
  goals:CourseGoalData[];
}

export default function CourseGoalList({goals}:CourseGoalList) {
    return (
        <ul>
        {goals.map((goal)=>(
          <li key={goal.id}>
            < CourseGoal title={goal.title} description={goal.description}> 
            </CourseGoal> 
            
          </li>
        ))}
      </ul>
    )
}