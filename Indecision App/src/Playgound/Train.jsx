

let count = 0
const addOne = () => {
  count++
  document.querySelector('h1').innerText = `Count: ${count}`
}
const minusOne = () => {
  count--
  document.querySelector('h1').innerText = `Count: ${count}`
}
const reset = () => {
  count= 0
  document.querySelector('h1').innerText = `Count: ${count}`
}


const Train = () => {
  return (
    <div >
      <header className="train-bgclr text-center">
        <h1 className="display-4 ">Count: {count}</h1>
      </header>
      <div className="d-flex  justify-content-around ">
       <button onClick={addOne} className="btn btn-primary ">+1</button>
       <button onClick={reset} className="btn btn-primary ">Reset</button>
       <button onClick={minusOne} className="btn btn-primary ">-1</button>
      </div>
      
    </div>
  );
};

export default Train;
