let add = (a, b) => a + b

@react.component
let make = () => {
    let (count, setCount) = React.useState(_ => 0)

    <>
        <h3>{count -> Belt.Int.toString -> React.string}</h3>
        <button onClick = {_ => setCount(prev => prev + 1)}>
            {"Increment" -> React.string}
        </button>
        // <h1> {count -> Belt.Int.toString -> React.string}</h1>
    </>
}

// https://www.geeksforgeeks.org/how-to-create-a-simple-counter-using-reactjs/
// https://www.youtube.com/watch?v=PzCEn5Zp0jY