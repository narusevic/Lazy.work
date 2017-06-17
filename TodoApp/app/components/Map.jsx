import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserInfo, logout } from '../actions';
import mapboxgl from 'mapbox-gl';
// or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoibmFydXNldmljIiwiYSI6ImNqNDB5NjVjczA3Y2IzMnBjN3p5dTcxcGcifQ.aS9-oA4LRUPn1ALSESBZ_A';

export default class Map extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            lng: 25.279651,
            lat: 54.687156
        };

        //this.getLocation = this.getLocation().bind(this);
        //this.showPosition = this.showPosition().bind(this);
    }

    componentDidMount()
    {
        this.getLocation;

        const lng = this.state.lng;
        const lat = this.state.lat;

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [this.state.lng, this.state.lat],
            zoom: 12
        });

        map.on('load', function ()
        {
            // Add a layer showing the places.
            map.addLayer({
                "id": "places",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "properties": {
                                "icon": "marker"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [lng, lat]
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "icon-allow-overlap": true
                }
            });

            // When a click event occurs on a feature in the places layer, open a popup at the
            // location of the feature, with description HTML from its properties.
            map.on('click', 'places', function (e)
            {
                new mapboxgl.Popup()
                    .setLngLat(e.features[0].geometry.coordinates)
                    .setHTML(e.features[0].properties.description)
                    .addTo(map);
            });
        });

        this.forceUpdate();
    }

    render()
    {
        return (
            <div className="right-container" id="map" >
            </div >
        )
    }

    getLocation()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else
        {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    showPosition(position)
    {
        console.log(position.coords.latitude + " " + position.coords.longitude);
        this.setState({
            lng: position.coords.longitude,
            lat: position.coords.latitude
        });

    }
}

//const mapStateToProps = state => ({
//    loading: state.userInfo.loading,
//    userInfo: state.userInfo.userInfo
//});

//const mapDispatchToProps = dispatch => ({
//    getUserInfo: () => dispatch(getUserInfo),
//    logout: () => dispatch(logout)
//});

//export default connect(mapStateToProps, mapDispatchToProps)(Footer);
