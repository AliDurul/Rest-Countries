import axios from "axios";

const { createContext, useState, useEffect } = require("react");

const IpContext = createContext()


export const IpProvider = ({ children }) => {

    const [userip, setUserip] = useState("35.156.81.0")
    const [ipres, setIpres] = useState("")

    const getData = async () => {
        try {
            const response = await axios(`https://api.getgeoapi.com/v2/ip/${userip}?api_key=38f50dc94d57f68c0f1b5ae7153e44d56c0fb457`)
            setIpres(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (userip) {
            getData()
        }
    }, [userip])


    const values = {
        userip,
        setUserip,
        getData,
        ipres
    }

    return (
        <IpContext.Provider value={values}>{children}</IpContext.Provider>
    )
}


/* export const getValue = () => {
    return useContext(IpContext)
} */


export default IpContext;