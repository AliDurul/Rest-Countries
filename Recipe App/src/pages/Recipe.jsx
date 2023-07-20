import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    let { Mealid } = useParams()

    const [meal, setMeal] = useState()
    console.log(Mealid);

    const getDatabyId = async () => {
        const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
        setMeal(data.data.meals[0])
    }
    console.log(meal);
    useEffect(() => {
        getDatabyId()


    }, [])

    return (
        <>
            <h1>hadi bakalim</h1>
        </>
    )
}
export default Recipe