import React from 'react'
import { Link } from 'react-router-dom'
import manczyk from './mugshot.jpg'
import './Autorzy.css'
const Autorzy = () => {
    return (
        <body className='body'>
            <div className='glowna'>
                <div className='autor'>
                    <div className='zdjecie'>
                        <img src={manczyk} className='fotka'/>
                    </div>
                    <div className='opis'>
                        <p className='imie'>Adrian Gwiazdowski</p>
                        <p className='dane'>
                        Do jego obowiązków należała praca nad:    
                        <ul>
                            <li>Wykorzystanien API</li>
                            <li>Zakładką pokazującą graczy</li>
                            <li>Pasek Navigacji</li>
                            <li>Ogólnym rozwijaniem programu</li>
                            <li>Dokumentacją</li>
                            <li>Pomocą innym</li>
                        </ul> 
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='autor'>
                    <div className='zdjecie'>
                        <img src={manczyk} className='fotka'/>
                    </div>
                    <div className='opis'>
                        <p className='imie'>Tomasz Dubiel</p>
                        <p className='dane'>
                        Do jego obowiązków należała praca nad:    
                        <ul>
                            <li>Bazą danych</li>
                            <li>Ogólnym rozwijaniem programu</li>
                            <li>Dokumentacją</li>
                            <li>Pomocą innym</li>
                        </ul> 
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='autor'>
                    <div className='zdjecie'>
                        <img src={manczyk} className='fotka'/>
                    </div>
                    <div className='opis'>
                        <p className='imie'>Adam Wujkiewicz</p>
                        <p className='dane'>
                        Do jego obowiązków należała praca nad:    
                        <ul>
                            <li>Połączenie z bazą danych</li>
                            <li>Zakładka opisują program</li>
                            <li>Ogólnym rozwijaniem programu</li>
                            <li>Dokumentacją</li>
                            <li>Pomocą innym</li>
                        </ul> 
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='autor'>
                    <div className='zdjecie'>
                        <img src={manczyk} className='fotka'/>
                    </div>
                    <div className='opis'>
                        <p className='imie'>Arkadiusz Mańczyk</p>
                        <p className='dane'>
                        Do jego obowiązków należała praca nad:    
                        <ul>
                            <li>Stroną główną</li>
                            <li>Zakładką Rejestracji</li>
                            <li>Ogólnym rozwijaniem programu</li>
                            <li>Dokumentacją</li>
                            <li>Pomocą innym</li>
                        </ul> 
                        </p>
                    </div>
                </div>
                <hr/>
                <div className='autor'>
                    <div className='zdjecie'>
                        <img src={manczyk} className='fotka'/>
                    </div>
                    <div className='opis'>
                        <p className='imie'>Damian Szymański</p>
                        <p className='dane'>
                        Do jego obowiązków należała praca nad:    
                        <ul>
                            <li>Stroną główną</li>
                            <li>Autorami</li>
                            <li>Pasek Navigacji</li>
                            <li>Ogólnym rozwijaniem programu</li>
                            <li>Dokumentacją</li>
                            <li>Pomocą innym</li>
                        </ul> 
                        </p>
                    </div>
                </div>

            </div>
           
        </body>
    )
}

export default Autorzy
