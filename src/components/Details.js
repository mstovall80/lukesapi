import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props)=>{

    const [info, setinfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(res=>{
                console.log(res)
                setinfo(res.data)
            })
            .catch(err=>console.log(err))

    },[props.category, props.id])

    return (
        <div>
            <h1>hello there</h1>
            <p>Category: {props.category}</p>
            <p>Id: {props.id}</p>
            {props.category === "people"?
            <>
                <p>{info.name}</p>
                <p>{info.mass}</p>
                <p>{info.eye_color}</p>
            </>: props.category === "planets"?
            <>
                <p>{info.name}</p>
                <p>{info.climate}</p>
                <p>{info.terrain}</p>
                </>: props.category === "starships"?
            <>
                <p>{info.name}</p>
                <p>{info.model}</p>
                <p>{info.manufacture}</p>
                </>:""
            }
        </div>
    );
};
export default Details;