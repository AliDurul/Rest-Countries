
const Addoption = ({ app, setApp }) => {

    const formSubmit = (e) => {
        e.preventDefault();
        const optionInput = document.querySelector("input[name=option]");
        if (optionInput.value !== "") {
            /* merging new element in array AND mergin array in object*/
            setApp({
                ...app,
                options: [...app.options, optionInput.value.toUpperCase().trim()],
            });
            /* clearing input */
            optionInput.value = "";
        }
    };
    return (
        <div className="mt-3">

            {/* form input and submit button */}
            <form className="" action="#" onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    )
}

export default Addoption