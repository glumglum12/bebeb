import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Slider } from 'react-native';

import fotoMusica from './churrasquinho.jpeg';

const App = () => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = useState(136); // Tempo atual da música (em segundos)
  const duration = 136; // Duração total da música (em segundos)

  async function handleMusicPress() {
    console.log(isPlaying ? 'Pausing Sound' : 'Loading Sound');
    if (!sound) {
      const { sound } = await Audio.Sound.createAsync(
        require('./minha_musica.mp3')
      );
      setSound(sound);
    }

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }

    // Função para alternar a reprodução
    

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>

      <View style={styles.container2}>
<TouchableOpacity onPress={() => navigation.push('Details')}> 
  <AntDesign name="left" style={styles.buttonVoltar}  size={24} color="white" /> 
  </TouchableOpacity>
  <Text style={{color:'white',fontWeight:400}}> Fila - Menos é Mais</Text>
  </View>


      <Image source={fotoMusica} style={styles.albumImage} />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepbackward" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMusicPress} style={styles.button}>
<Icon name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
</TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <AntDesign name="stepforward" size={24} color="white" />
        </TouchableOpacity>
      </View>


{/* Barra de reprodução personalizada */}
<View style={styles.progressBar}>
        {/* Barra de progresso preenchida */}
        <View
          style={{
            width: `${(currentTime / duration) * 100}%`,
            height: 4,
            backgroundColor: 'white',
          }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2:{
alignItems:'center'
  },
  albumImage: {
    width: 280,
    height: 320,
    borderWidth: 2,
    marginBottom: 20,
    marginTop:40,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
   
    padding: 15,
  color:'white',
    marginHorizontal: 10,
    marginVertical: 10, // Adiciona espaço entre os botões
    marginLeft:10,
    marginRight:10,
  },

  button: {
    backgroundColor: '#1DB954', // Cor do botão do Spotify
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginVertical: 15, // Adiciona espaço entre os botões
   
    },
    progressBar: {
      width: '80%',
      height: 4,
      backgroundColor: '#1DB954', 
    },

    buttonVoltar:{
     marginBottom:10,
     marginRight:250,
    
    }
   
});

export default App;