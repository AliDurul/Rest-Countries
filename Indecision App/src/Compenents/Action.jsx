
const Action = ({ app, setApp }) => {
    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);

        const option = app.options[randomNum]
        console.log(option);
    };
    /* Reseting array */
    const resetAll = () => {
        setApp({ ...app, options: [] });
    };

    return (
        <div>
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={resetAll}>Remove All</button>
        </div>
    )
}

export default Action