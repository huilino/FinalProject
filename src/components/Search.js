import React from 'react';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/search.css';

export default function Search() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch("");
        navigate("/searched/" + search);
      };
    

  return(
      <div className="search-box">
        <form onSubmit = {handleSubmit} className = "search-box">
            <div className="search-icon">
                <FaSearch/>
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="inputrecipe" 
                    type="text" 
                    value={search} 
                    placeholder="What are you looking for ?..."
                />
            </div>
        </form>
    </div>
  )
}
