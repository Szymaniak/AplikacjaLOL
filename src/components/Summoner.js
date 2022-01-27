import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Summoner.css'
const Summoner = ({mecz, id}) => {
    const [mecze, setMecze] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abort = new AbortController();
        
        fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${mecz}?api_key=RGAPI-f6549eea-296c-4d1b-a46a-d9d24635775d`, {signal: abort.signal})
        .then(res => res.json())
        .then(data => setMecze(data))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
        return ()=> abort.abort();
        
    }, [mecz])
    function sw(x){
        switch(x){
            case 2:
                return 'Doublekill';
                break;
            case 3:
                return 'Tripplekill';
                break;
            case 4:
                return 'Quadrakill';
                break;
            case 5:
                return 'Pentakill';
                break;
            default:
                return 'Brak';
                break;    
        }
    }
      if(loading) return <span>Loading...</span>;
    return (
        <div className="summoner1" style={{
            backgroundColor: mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].win ? 'green' : 'red'
          }}>
               <h6><img src={`https://opgg-static.akamaized.net/images/lol/champion/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].championName}.png?image=c_scale,q_auto,w_46&v=1637122822`}/></h6>
              <div className='dane'>
                
        <div className="summoner">
            <h6>{(mecze.info.gameDuration/60).toFixed(2)} min</h6>
            <h6>{mecze.info.gameMode}</h6>
            <h6>{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].win ? 'Win' : 'Lost'}</h6>
            <h6>{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].kills}/{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].deaths}/{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].assists}</h6>
            <h6>{((mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].kills+mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].assists)/mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].deaths).toFixed(2)} KDA</h6>
        </div>
        <div className="summoner">
        <h6>Level: {mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].champLevel}</h6>
            <h6>{mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].neutralMinionsKilled} CS</h6>
            <h6>{sw(mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].largestMultiKill)}</h6>
        </div>
        <div className="summoner">
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item0}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item1}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item2}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item3}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item4}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item5}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
            <img src={`https://opgg-static.akamaized.net/images/lol/item/${mecze.info.participants[mecze.info.participants.findIndex(item => item.puuid === id)].item6}.png?image=q_auto:best&v=1637122822`} className='imgitem'/>
        </div>
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
            <Link to='/mecze'
                state={{mecz: mecz}}>
            
            </Link>
            </div>
        
    )
}

export default Summoner
