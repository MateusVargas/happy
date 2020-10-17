import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMarker from '../images/map-marker.png'
import { Feather } from '@expo/vector-icons'

import api from '../services/api'

interface Orphanage{
  id: number
  name: string
  latitude: number
  longitude: number
}

export default function OrphanagesMap(){
	const { navigate } = useNavigation()

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(()=>{
    api.get('orphanages').then(resp=>{
      setOrphanages(resp.data)
    })
  },[])

	function handleNavigateOrphanageDetails(id: number){
		navigate('OrphanageDetails',{id})
	}

  function handleNavigateCreateOrphanage(){
    navigate('SelectMapPosition')
  }

	return(
		<View style={styles.container}>
		    <MapView 
		        provider={PROVIDER_GOOGLE}//usando google maps como default
		        style={styles.map}
		        initialRegion={{
		          latitude: -29.7147529,
		          longitude: -53.7171817,
		          latitudeDelta: 0.008,
		          longitudeDelta: 0.008,
		        }}
		    >
		      {orphanages.map(orphanage=>{
            return(
              <Marker
                  key={orphanage.id}
                  icon={mapMarker}
                  calloutAnchor={{
                      x: 2.7,
                      y: 0.8,
                  }}
                  coordinate={{
                      latitude: orphanage.latitude,
                      longitude: orphanage.longitude,
                  }}
              >
                      <Callout tooltip={true} onPress={() => {handleNavigateOrphanageDetails(orphanage.id)}}>
                      <View style={styles.calloutContainer}>
                        <Text style={styles.calloutText}>{orphanage.name}</Text>
                      </View>
                  </Callout>
              </Marker>
            )
          })}
		    </MapView>

		    <View style={styles.footer}>
		        <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
		        <RectButton 
		          style={styles.createOrphanageButton}
		          onPress={handleNavigateCreateOrphanage}
		        >
		        	<Feather name="plus" size={20} color='#fff'/>
		        </RectButton>
		    </View>
		</View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089A5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10, /* propriedade de sombra */
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});