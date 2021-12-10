import { cleanup } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import './Summoner.css'
import getApi from './myapi'
const Summoner = ({mecz, id}) => {

    const [mecze, setMecze] = useState([])
    const [loading, setLoading] = useState(true)
    const [idp, setIdp] = useState(true)
    useEffect(() => {
        const abort = new AbortController();
        
        fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${mecz}?api_key=${getApi()}`, {signal: abort.signal})
        .then(res => res.json())
        .then(data => setMecze(data))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
        return ()=> abort.abort();
        
    }, [mecz])
      if(loading) return <span>Loading...</span>;
    return (
        <div className="summoner1" style={{
            backgroundColor: mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].win ? 'green' : 'red'
          }}>
        <div className="summoner">
            <h6><img src={`https://opgg-static.akamaized.net/images/lol/champion/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].championName}.png?image=c_scale,q_auto,w_46&v=1637122822`}/></h6>
            <h6>{(mecze.info.gameDuration/60).toFixed(2)} min</h6>
            <h6>{mecze.info.gameMode}</h6>
            <h6>{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].win ? 'Win' : 'Lost'}</h6>
            <h6>{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].kills}/{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].deaths}/{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].assists}</h6>
            <h6>{((mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].kills+mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].assists)/mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].deaths).toFixed(2)} KDA</h6>
        </div>
                <div className="summoner">
                {mecze.info.participants.slice(0,5).map(mecz =>(<h6><img src={`https://opgg-static.akamaized.net/images/lol/champion/${mecz.championName}.png?image=c_scale,q_auto,w_46&v=1637122822`}/>{mecz.summonerName}</h6>))}
            </div>
            <div className="summoner">
                VS
            </div>
            <div className="summoner">
                {mecze.info.participants.slice(5,10).map(mecz =>(<h6><img src={`https://opgg-static.akamaized.net/images/lol/champion/${mecz.championName}.png?image=c_scale,q_auto,w_46&v=1637122822`}/>{mecz.summonerName}</h6>))}
            </div>
            </div>
        
    )
}

export default Summoner
