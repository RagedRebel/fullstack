const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  

  return (
    <div>
      <Header heading={course}/>
      <Content p1={parts[0].name} p2={parts[0].exercises} p3={parts[1].name} p4={parts[1].exercises} p5={parts[2].name} p6={parts[2].exercises}/>
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises}/>
    </div>
  )
}

const Header =(props)=>{
  return(
  <div>
    <h1>{props.heading}</h1>
  </div>
  )
}

const Content=(props)=>{
  return(
    <div>
     <p>{props.p1} {props.p2}</p>
     <p>{props.p3} {props.p4}</p>
     <p>{props.p5} {props.p6}</p>
    </div>
  )
}
const Total=(props)=>{
  return(
    <div>
      Number of exercises {props.ex1+props.ex2+props.ex3}
      </div>
  )
}



export default App