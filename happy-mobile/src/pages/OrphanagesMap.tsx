import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMarker from '../images/map-marker.png'
import { Feather } from '@expo/vector-icons'


export default function OrphanagesMap(){
	const { navigate } = useNavigation()

	function handleNavigateOrphanageDetails(){
		navigate('OrphanageDetails')
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
		    <Marker
		        icon={mapMarker}
		        calloutAnchor={{
		            x: 2.7,
		            y: 0.8,
		        }}
		        coordinate={{
		            latitude: -29.7147529,
		            longitude: -53.7171817,
		        }}
		    >
  	            <Callout tooltip={true} onPress={handleNavigateOrphanageDetails}>
		            <View style={styles.calloutContainer}>
		              <Text style={styles.calloutText}>ola mundo</Text>
		            </View>
		        </Callout>
		    </Marker>
		    </MapView>

		    <View style={styles.footer}>
		        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
		        <TouchableOpacity 
		          style={styles.createOrphanageButton}
		          onPress={()=>{}}
		        >
		        	<Feather name="plus" size={20} color='#fff'/>
		        </TouchableOpacity>
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
    fontFamily: 'nunito700'
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
    fontFamily: 'nunito700'
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