import React, { useState, useCallback, useRef } from "react";
import "./Summoners.css";
import Summoner from "./Summoner";
import { useEffect } from "react/cjs/react.development";
import getApi from "./myApi";

const Summoners = () => {
  const [dane, setDane] = useState([]);
  const [mecze, setMecze] = useState([]);
  const [iconid, setIcon] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(
    async (e) => {
      setIsSending(true);
      const value = e.target.value;
      if (e.key === "Enter") {
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
      <input
        type="text"
        className="imputtext"
        onKeyDown={sendRequest}
        placeholder="Nazwa przywoływacza"
      ></input>
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
