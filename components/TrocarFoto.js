
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

import foto from './bruno.jpg';

const ProfilePhotoChanger = () => {
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Aspecto quadrado para se assemelhar ao Spotify
      quality: 1,
    });

   
  };

  return (
    <View style={styles.container}>

<View style={styles.container2}>
<TouchableOpacity> 
  <AntDesign name="left" style={styles.buttonVoltar}  size={24} color="white" /> 
  </TouchableOpacity>
  <Text style={{color:'white',fontWeight:600}}> Trocar foto de perfil!</Text>
  </View>


      <View style={styles.photoContainer}>
      <Image source={foto} style={styles.photo} />

        
  <TouchableOpacity onPress={handleChoosePhoto} style={styles.button}>
    <Text style={styles.buttonText}>Click aqui</Text>
  </TouchableOpacity>
</View>
</View>
);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212', // Cor de fundo do Spotify
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2:{
      alignItems:'center'
        },
      
    photoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop:60,
    },
    photo: {
      width: 200,
      height: 200,
      borderRadius: 100, // Foto redonda
    },
    defaultIcon: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: '#535353', // Cor de ícone padrão do Spotify
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconText: {
      color: '#fff', // Texto branco para contraste
    },
    button: {
        backgroundColor: '#1DB954', // Cor do botão do Spotify
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop:30,
        borderRadius: 50,
      },
      buttonText: {
        color: '#fff', // Texto branco para contraste
        fontWeight: 'bold',
      },

      buttonVoltar:{
        marginBottom:10,
        marginRight:250,
       
       }
   
    });
    
    export default ProfilePhotoChanger;  