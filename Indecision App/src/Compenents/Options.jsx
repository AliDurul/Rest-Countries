
const Options = ({ app }) => {
    return (
        <div>
            <ol>
                {app.options.map((item, i) => (
                    <li key={i}> {item}</li>
                ))}
            </ol>
        </div>
    )
}
export default Options;