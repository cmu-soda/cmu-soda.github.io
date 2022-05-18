@react.component
let make = () => {
  // let total = Counter.add(2, 3) -> Belt.Int.toString 

  <>
  <h1> { ("Hello World ") -> React.string } </h1>
  <Counter />
  </>
}

// @react.component
// switch(ReactDOM.querySelector("#root")){
// | Some(root) => ReactDOM.render(<div> {React.string("Hello Andrea")} </div>, root)
// | None => () // do nothing
// }

// let wrapChildren = (children: React.element) => {
//   <div>
//     <h1> {React.string("Overview")} </h1>
//     children
//   </div>
// }

// wrapChildren(<div> {React.string("Let's use React with ReScript")} </div>)

