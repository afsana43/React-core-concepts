//  export default function Todo( {task, isDone}){
//     console.log(task);
//     return (
//         <>
        
//         <li>Task : {task}</li>
//         </>
//     )
// }


// conditional rendaring option-1:
//  export default function Todo( {task, isDone}){
//   if(isDone === true){
//     return <li>Finished : {task}</li>
//   }
//   else {
//     return <li>Work on : {task}</li>
//   }
  
// }
// shortcut option-1
 export default function Todo( {task, isDone}){
  if(isDone){
    return <li>Finished : {task}</li>
  }
    return <li>work on : {task}</li>
  
}

