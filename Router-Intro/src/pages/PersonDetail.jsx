import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const PersonDetail = () => {
    let { id } = useParams()
    const [person, setPerson] = useState()

    const getPeople = () => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => setPerson(data.data))
            .catch((err) => console.log(err));
    };
    console.log(person);
    useEffect(() => {
        getPeople()

    }, [])




    let navigate = useNavigate()
    return (
        <div className="container text-center">
            <h3>
                {person?.first_name} {person?.last_name}
            </h3>
            <img className="rounded" src={person?.avatar} alt="" />
            <p>{person?.email}</p>
            <div>
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-success me-2"
                >
                    Go Home
                </button>
                <button className="btn btn-warning"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default PersonDetail