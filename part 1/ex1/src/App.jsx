const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  

  return (
    <div>
      <Header heading={course}/>
      <Part1 p1={part1.name} p2={part1.exercises}/>
      <Part2 p1={part2.name} p2={part2.exercises}/>
      <Part3 p1={part3.name} p2={part3.exercises}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
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

const Part1=(props)=>{
  return(
    <div>
     <p>{props.p1} {props.p2}</p>
    </div>
  )
}
const Part2=(props)=>{
  return(
    <div>
     <p>{props.p1} {props.p2}</p>
    </div>
  )
}
const Part3=(props)=>{
  return(
    <div>
     <p>{props.p1} {props.p2}</p>
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