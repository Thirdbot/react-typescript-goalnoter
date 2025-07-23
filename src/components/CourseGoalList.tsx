import CourseGoal from "./CourseGoal"
type CourseGoalList = {
  goals:{title:string;
  description:string;
  id:number;}[];
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