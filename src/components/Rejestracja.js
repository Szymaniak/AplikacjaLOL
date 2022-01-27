import React from 'react'
import './Rejestracja.css'

const Home = () => {
    function getMoviesFromApiAsync() {
        return fetch('https://coachasistantapi3.herokuapp.com/api/getall',{
      method: "GET",
      signal: AbortController.signal,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
        .then((response) => response.json())
        .then((responseJson) => {
          
            console.log(responseJson);
            
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
     }
     getMoviesFromApiAsync();
    return (

        <div class="body">
           
            <div class="form">
                <form>
            <legend>Rejestracja:</legend>
            <label for="t1"class="dane">Login: </label><input id="t1" type="text" maxlength="20" />
                <br /><br />
                <label for="t2"class="dane">Hasło: </label><input id="t2" type="password" placeholder="********" required minlength="8"/>
                <br /><br />
                <label for="t3" class="dane">Powtórz hasło: </label><input id="t3" type="password" placeholder="********" required minlength="8"/>
                <br /><br />
                <label for="t4" class="dane">E-mail: </label><input id="t4" type="email" placeholder="@gmail.com" required/>
                <br /><br />
                <input class="send" type="submit" value="Zarejestruj" onClick={()=>(alert("Rejestracja jest obecnie niedostępna."))}/><br />

                </form>
            </div>
            </div>
        
    )
}

export default Home