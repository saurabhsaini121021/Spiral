import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import title from './tittle1.png'
import Search from '../components/Search'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/*Link React Router*/}
                    <Link to='/about'>About</Link>
                    {/*Link React Router*/}
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerRight">
                    {/*Link  */}
                    <Link to='/gmail'>Gmail</Link>
                    {/*Link  */}
                    <Link to='/images'>Images</Link>
                    {/*Icon  */}
                    <AppsIcon />
                    {/*Avatar  */}
                    <Avatar />

                </div>
            </div>
            <div className="home__body">
                <img src={title} alt="" />
                <div className="home__inputContainer">
                    {/*Search Component*/}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
