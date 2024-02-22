const App = () => {
  const head='Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header heading={head}/>
      <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
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
     <Part name={props.p1} num={props.ex1} />
     <Part name={props.p2} num={props.ex2} />
     <Part name={props.p3} num={props.ex3} />
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
const Part=(props)=>{
  return(
    <div>
      <p>
      {props.name} {props.num}
      </p>
    </div>
  )
}

export default App