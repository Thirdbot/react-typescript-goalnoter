import CourseGoal from "./CourseGoal"
import { type CourseGoalData } from "../App"
import InfoBox from "./infoBox"
import type { ReactNode } from "react";

type CourseGoalList = {
  goals:CourseGoalData[];
  onDelete: (id:number) => void;

}

export default function CourseGoalList({goals,onDelete}:CourseGoalList) {
  let warningbox: ReactNode = null;
  if(goals.length === 0) {
    return <InfoBox mode='hint'>You have no goals yet!</InfoBox>  
   }
   if (goals.length >= 4){
     warningbox = <InfoBox mode='warning' severity="medium">You have more than 3 goals, you should focus on fewer goals!</InfoBox>
   }
    return (
      <>
        {warningbox}
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                description={goal.description}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      </>
    )
}