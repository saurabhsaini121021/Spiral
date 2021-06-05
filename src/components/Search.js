import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/reducer';


function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();

        console.log(input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div>

                    <div className="search__buttons">
                        <Button type='submit' onClick={search} variant="contained" color="primary">Spiral Search</Button>
                        <Button variant="contained" color="primary">I'm Feeling lucky</Button>
                    </div>
                    <div className="date">© Saurabh Saini &nbsp; {new Date().getFullYear()}</div>
                </div>
            ) : (


                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type='submit' onClick={search} variant="contained" color="primary">Spiral Search</Button>
                    <Button className="search__buttonsHidden" variant="contained" color="primary">I'm Feeling lucky</Button>
                </div>

            )}

        </form>
    )
}

export default Search
