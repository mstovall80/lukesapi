import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";

const Search = () => {

        const [categories, setCategories]= useState([])

        const [ forminfo, setforminfo] = useState({
            category:"people",
            id:""
        })

        useEffect(()=>{

            axios.get("http://swapi.dev/api/")
                .then(res=>{
                    console.log(res)
                    console.log(Object.keys(res.data))
                    setCategories(Object.keys(res.data))
                })
                .catch(err=> console.log(err))

        }, [])

        const changeHandler = (e)=>{
            console.log("making changes in the input")
            setforminfo({
                ...forminfo,
                [e.target.name]: e.target.value
            })
        }


        const submitHandler = (e)=>{
            e.preventDefault();
            navigate(`/${forminfo.category}/${forminfo.id}`)


        }

    return(
        <div className= "container">
            <form onSubmit= {submitHandler} className="form-inline">
                <div className="form-group mr-5">
                    <label htmlFor="">Category:</label>
                    <select onChange= {changeHandler} name="category" id="" className="form-control">
                        {
                        categories.map((cat,i) =>{
                            return <option key={i} value={cat}>{cat}</option>
                        })
                        }

                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="">ID:</label>
                    <input onChange= {changeHandler} className="form-control" type="number" name="id" />
                </div>
                <button type="submit" className="btn btn-danger">Search</button>
            </form>
        </div>
    );
}

export default Search;