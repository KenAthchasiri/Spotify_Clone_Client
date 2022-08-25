import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { reducerCases } from '../utils/Constant'
import { useStateProvider } from '../utils/StateProvider'

const CurrentTrack = () => {

    const [{token,currentlyPlaying},dispatch] = useStateProvider()
    useEffect(()=>{
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing',{
                headers: {
                    Authorization: "Bearer "+token,
                    "Content-Type": "application/json"
                }
            })
            if(response.data !=='') {
                const {item} = response.data
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist)=>artist.name),
                    image: item.album.images[2].url
                }
                dispatch({type: reducerCases.SET_PLAYING,currentlyPlaying})
            }
        }
        getPlaylistData()
    },[token,dispatch])

    return (
        <Container>
            {
                currentlyPlaying && (
                    <div className="track">
                        <div className="track_image">
                            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                        </div>
                        <div className="track_info">
                            <h4>{currentlyPlaying.name}</h4>
                            <h6>{currentlyPlaying.artists.join(", ")}</h6>
                        </div>
                    </div>
                )
            }
        </Container>
    )
}

export default CurrentTrack

const Container = styled.div`
    .track{
        display: flex;
        align-items: center;
        gap: 1rem;
        &_info{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h4{
                color: white;
            }
            h6{
                color: #b3b3b3;
                font-size: 0.67em;
            }
        }
    }
`