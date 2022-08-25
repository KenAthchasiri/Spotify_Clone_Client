import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Playlist from './Playlist'

const Sidebar = () => {
    return (
        <Container>
            <div className="top_links">
                <div className="logo">
                <img 
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                    alt="spotity" 
                />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled/>
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch/>
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary/>
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            <Playlist/>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top_links{
        display: flex;
        flex-direction: column;
        .logo{
            text-align: center;
            margin: 1rem 0;
            img{
                max-inline-size: 80%;
                block-size: auto;
            }
        }
        ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li{
                display: flex;
                cursor: pointer;
                gap:1rem;
                transition: 0.3s ease-in-out;
                &:hover{
                    color: white;
                }
            }
        }
    }

`