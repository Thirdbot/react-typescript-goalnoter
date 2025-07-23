import { type FC, type PropsWithChildren} from "react";
// interface CourseGoalProps{
//     title: string;
//     description: string;
//     children:ReactNode
// }

interface CourseGoalData{
    id: number;
    title: string;
    description: string;
    onDelete: (id:number) => void;
}
type CourseGoalProps = PropsWithChildren<CourseGoalData>;

const CourseGoal:FC<CourseGoalProps> = ({title,id,description,children,onDelete}) => {
    
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {children}
            <button onClick={()=>{onDelete(id)}}>Delete Goal</button>
            
        </section>
    )
}
export default CourseGoal;