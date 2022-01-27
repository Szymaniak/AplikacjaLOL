import React, { useState, useCallback, useRef } from "react";
import "./Summoners.css";
import Summoner from "./Summoner";
import { useEffect } from "react/cjs/react.development";
import getApi from "./myapi";


const Summoners = () => {
  const [dane, setDane] = useState([]);
  const [mecze, setMecze] = useState([]);
  const [iconid, setIcon] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);
  const [Name, setName]=useState([]);
  const [id, setId]=useState(0);

  useEffect(() => { 
    
    return fetch('https://coachasistantapi3.herokuapp.com/api/getall',{
  method: "GET",
  signal: AbortController.signal,
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
})
    .then((response) => response.json())
    .then((responseJson) => {
      
        console.log(responseJson);
        setName(responseJson)
     
    })
    .catch((error) => {
      console.error(error);
    });
 },[Name.playerId]);

 
 function deletePlayer() { 
     //updateArray(Name.filter(item => item.playerId !== id));
   // Name.splice(id,1);
     var lenName = Name.length;
     console.log("length: "+lenName);
     
    // Name.splice(Name.indexOf(id),1);
   //   setName(Name);
   setName(Name.filter(item=>item.playerId!=id))
     
    
  return fetch(`https://coachasistantapi3.herokuapp.com/api/delete/${id}`,{
    method: "DELETE",
    signal: AbortController.signal,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
  
   
  
 }

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  
  function sendData (){
    var newData={
      "nickname":dane.name,
      "riotPuuid":dane.puuid
    }

    var newArray = Name.slice();    
    newArray.push(newData);   
    setName(newArray);

      fetch("https://coachasistantapi3.herokuapp.com/api/create", {
   method: "POST",
   headers: {"content-type":"application/json"},
   body:  JSON.stringify(newData)
   
})
    }
    
    const loadSelectedPlayer = useCallback(
      async (e) => {
        setIsSending(true);

        const value = e;
          
          fetch(
            `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${getApi()}`
          )
            .then((res) => res.json())
            .then((data) => {
              const puuid = data.puuid;
              
              setIcon(data.profileIconId);
              setDane(data);
              return fetch(
                `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${getApi()}`
              );
            })
            .then((response) => response.json())
            .then((data) => setMecze(data))
            .catch((err) => console.log(err))
            .finally(() => setIsSending(false));
        
      },
      [isSending]
    );

  const sendRequest = useCallback(
    async (e) => {
      setIsSending(true);
      
      const value = e.target.value;
      if(e.key ==='Enter'){
      
      
      
        fetch(
          `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${getApi()}`
        )
          .then((res) => res.json())
          .then((data) => {
            const puuid = data.puuid;
            
            setIcon(data.profileIconId);
            setDane(data);
            return fetch(
              `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${getApi()}`
            );
          })
          .then((response) => response.json())
          .then((data) => setMecze(data))
          .catch((err) => console.log(err))
          .finally(() => setIsSending(false));
        }
    },
    [isSending]
  );

  return (
    <div className="summoners">
      <div className="kontrolki">
        <input
        type="text"
        className="imputtext"
        onKeyDown={sendRequest}
        placeholder="Nazwa przywoływacza"
      ></input>
      <button className="Zapisz" onClick={sendData}>Zapisz</button>
      
  <select  onChange={(e)=>{setId(e.target.value);loadSelectedPlayer(e.target.options[e.target.selectedIndex].text)}} className="Zapisz">
    {Name.map((d)=><option value={d.playerId} key={d.playerId}>{d.nickname}</option>)}
  </select>
  <button className="Zapisz" onClick={deletePlayer}>Delete</button>
      </div>
      
    
  
      <div className="summoner2">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconid}.png`}
          className="icon"
        />
        <div className="para">
          <p>Nazwa: {dane.name}</p>
          <p>Level: {dane.summonerLevel}</p>
        </div>
      </div>

      {isSending
        ? ""
        : mecze.map((mecz) => (
            <h1 key={mecz}>
              <Summoner mecz={mecz} id={dane.puuid} />
            </h1>
          ))}
    </div>
  );
};

export default Summoners;
