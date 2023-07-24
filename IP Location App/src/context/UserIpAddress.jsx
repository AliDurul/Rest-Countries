const { createContext, useState, useContext } = require("react");

const IpContext = createContext()


export const IpProvider = ({ children }) => {

    const [userip, setUserip] = useState()

    const values = {
        userip,
        setUserip
    }

    return (
        <IpContext.Provider value={values}>{children}</IpContext.Provider>
    )
}


/* export const getValue = () => {
    return useContext(IpContext)
} */


export default IpContext;