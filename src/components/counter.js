import react, { useState, useEffect }from 'react'; 

const Counter = () => {
    const [count, setCount] = useState(0); 

    const useIncrement = () => {
        setCount(count + 1); 
    }
    // const useDecrement = () => {
    //     setCount(count - 1); 
    // }

    useEffect(() => {
        console.log("The Counter is being used")
        return () =>  {
            console.log(`We are in the cleanup - the count is ${count}`)
        }
        
    }, [count])

    const halfValue = () => {
        setCount(count / 2); 
    }
    // const roundNumber =( ) => {
    //     setCount(Math.round(count)); 
    // }

    return (
        <div>
            <h1>
                The count is: {count}
            </h1>
            <button onClick={useIncrement}>Increment</button>
            <button onClick={()=> {setCount(count - 1)}}>decrement</button>
            <button onClick={halfValue}>Half Value</button>
            <button onClick={ () => {setCount(Math.round(count))} }>Round to nearest value</button>
        </div>
    )
}

export default Counter