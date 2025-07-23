import { useState, type FC, type PropsWithChildren, type ReactNode } from "react";
// interface CourseGoalProps{
//     title: string;
//     description: string;
//     children:ReactNode
// }

interface CourseGoalData{
    title: string;
    description: string;
}
type CourseGoalProps = PropsWithChildren<CourseGoalData>;

const addup:(number1:number, number2:number) => number = (number1, number2) => {
    return number1 + number2;
}

const CourseGoal:FC<CourseGoalProps> = ({title,children}) => {
    const [count,setcount] = useState(1);
    
    function increateHandler() {
        setcount(prevCount => prevCount + 1);
        return addup(count, 1);
    }   
    const description = "Learn it from ground up.";
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {children}
            <button onClick={increateHandler}>Increment {count}</button>
            
        </section>
    )
}
export default CourseGoal;