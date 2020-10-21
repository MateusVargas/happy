import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg'
import mapIcon from '../utils/mapIcon'

import api from '../services/api'


interface Orphanage {
	id: number
	name: string
	latitude: number
	longitude: number
}

export default function OrphanagesMap(){

	const [orphanages, setOrphaneges] = useState<Orphanage[]>([])

	useEffect(()=>{
			api.get('orphanages').then(resp => {
				setOrphaneges(resp.data)
			}).catch(error => {
				console.error(error)
			})
	},[])

	return(
		<div id="page-map">
	   		<aside>
	   			<header>
	   				<img src={mapMarkerImg} alt="Happy"/>
	   				<h2>Escolha um orfanato no mapa</h2>
	   				<p>Muitas crianças estão esperando a sua visita :)</p>
	   			</header>

	   			<footer>
	   				<strong>Santa Maria</strong>
	   				<span>Rio Grande do Sul</span>
	   			</footer>
	   		</aside>

	   		<Map
	   			center={[-29.6878448,-53.8058115]}
	   			zoom={15}
	   			style={{ width:'100%', height: '100%' }}
	   		>
	   			<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
	   			
	   			{orphanages && orphanages.map(orphanage => {
	   				return(
	   					<Marker
	   						key={orphanage.id}
			   				position={[orphanage.latitude,orphanage.longitude]}
			   				icon={mapIcon}
			   			>
			   				<Popup 
			   				closeButton={false}
			   				minWidth={248}
			   				maxWidth={248}
			   				className="map-popup"
			   				>
			   					{orphanage.name}
			   					<Link to={`/orphanages/${orphanage.id}`}>
			   						<FiArrowRight size={20} color="#fff"/>
			   					</Link>
			   				</Popup>
			   			</Marker>
	   				)
	   			})}
	   		</Map>

	   		<Link to='/orphanages/create' className="create-orphanage">
	   			<FiPlus size={32} color="#fff"/>
	   		</Link>
	    </div>
	)
}