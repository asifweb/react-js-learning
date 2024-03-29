import React, {useEffect, useState} from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api/index'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [weatherData, setWeatherData] = useState([])
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        });
    }, [])

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
            setIsLoading(true)

            getWeatherData(coordinates.lat, coordinates.lng)
                .then((data) => {
                    setWeatherData(data)
                })

            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    console.log('Travel Data ',data)
                    setPlaces(data)
                    setFilteredPlaces([]);
                    setIsLoading(false)
            })
        }
    }, [bounds, type])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width:'100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                         places={ filteredPlaces.length ? filteredPlaces :  places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                     />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coord={coordinates}
                    places={ filteredPlaces.length ? filteredPlaces :  places}
                    setChildClicked={setChildClicked}
                    weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App
