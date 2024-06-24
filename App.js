import React,{useState} from 'react';
import {Button, View, Text,StyleSheet,SafeAreaView, ScrollView, StatusBar, Image,
TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import bruninho from './img/bruninho2.png';
import jorgeMateus from './img/jorgeEmateus.jpg';
import ph from './img/ph.jpg';
import postMalone from './img/postMalone.png';
import mix  from './img/mix2010.png';
import kayBlack from './img/kayBlack.png';
import funkLactea from './img/funkLactea.png';
import pagode from './img/pagode.png';
import mixPop from './img/mixPop.png';
import mixSamba from './img/mixSamba.png';
import mixHenJuliano from './img/mixHenJuliano.png';
import mixRomantico from './img/mixRomantico.png'
import mixLuan from './img/mixLuan.png';
import menosMais from './img/menosEmais.png';
import noviAtualizado from './img/noviAtualizado.jpg';
import perfil from './img/bruno.jpg';

import artista1 from './img/artista1.png';
import artista2 from './img/artista2.png';
import artista3 from './img/artista3.png';
import artista4 from './img/artista4.png';


import inicio from './img/inicio.png';
import usuario from './img/usuario.png';
import biblioteca from './img/biblioteca.png';


import joiceImg from './img/joice.jpeg';
 import emilyImg from './img/emily.jpeg';
 import stephanyImg from './img/sthap.jpeg';
 import thiagoImg from './img/thiago.jpeg';
 import menuImg from './img/menu.png';
 
 import loginImg from './img/icon99.jpg';
 import google from './img/google.png';
 import test from './img/test.png';
 import test2 from './img/test2.png';
 import test3 from './img/test3.png';
 import test4 from './img/test4.png';

import podcast1 from './img/podcast1.png';
import podcast2 from './img/podcast2.png';
import podcast3 from './img/podcast3.png';
import podcast4 from './img/podcast4.png';


import perfilImg from './img/bela.jpg';
import moreImg from './img/more.png';
import pesImg from './img/icon.png';
import clasImg from './img/clas.png';
import dadosImg from './img/dados.png';
import chicoImg from './img/chico.jpg';
import amyImg from './img/amy.jpg';
import lanaImg from './img/lana.jpg';
import bacoImg from './img/baco.jpg';
import lana2Img from './img/lana2.jpg';
import macImg from './img/mac.png';
import yeImg from './img/ye.jpg';
import tomImg from './img/tom.jpg';

import love from './img/lo.jpg';
import cor from './img/cor.jpg';
import jr from './img/jr.jpg';
import bk from './img/bk.jpeg';


import TrocarFoto from '././components/TrocarFoto';
import TocarMusica from '././components/TocarMusica';
import QrCode from '././components/QrCode';




function HomeScreen({ navigation }) {
  const[login,setLogin] = useState();
  const[senha,setSenha] = useState();
  const[dados,setDados] = useState();

  const verificar =()=>{
    if(login=='Admin' && senha=='123'){
      navigation.navigate('Details')
    }
    else{
      const valores = "Login inválido"
      setDados(valores)
    }
  }

  return (
    <View style={{ flex: 1 }}>
           <SafeAreaView style={styles.container}> 
      <ScrollView style={styles.scrollView}>

        <View style={styles.container2}>
          <View style={styles.colunaGrande}>
          <Image 
    style={styles.imgLogin}
    source = {loginImg}
      />
          </View>
      
    </View>


   <View style={styles.container2}>
   <View style={styles.colunaTxtLogin}>
      <Text style={styles.text}>Entrar no Spotify</Text>
   </View>
    </View>
  
    <View style={styles.container2}>
    <View style={styles.colunaBotao}>
   <TouchableOpacity style={styles.controlButton}>
   <Image 
    style={styles.img}
    source = {google}
      />
</TouchableOpacity>
</View>
</View>

<View style={styles.container2}>
<View style={styles.colunaBotao}>
<TouchableOpacity style={styles.controlButton}>
<Image 
    style={styles.img}
    source = {test2}
      />
</TouchableOpacity>
</View>
</View>


<View style={styles.container2}>
<View style={styles.colunaBotao}>
<TouchableOpacity style={styles.controlButton}>
<Image 
    style={styles.img}
    source = {test3}
      />
</TouchableOpacity>
</View>
</View>


<View style={styles.container2}>
  <View style={{marginTop:40,marginLeft:15,marginBottom:10}}>
    <TextInput style={styles.caixaDeTexto}
    placeholder='E-mail ou nome de usuário'
    placeholderTextColor='black'
    autoFocus={true}
    onChangeText = {text => setLogin(text)}
>
    </TextInput>
  </View>
</View>


<View style={styles.container2}>
  <View style={{marginTop:3,marginLeft:30}}>

    <TextInput style={styles.caixaSenha}
    placeholder='Senha'
    placeholderTextColor='black'
    onChangeText = {text => setSenha(text)}
>
    </TextInput>

  </View>
</View>

<View style ={styles.container2}>
<View style={styles.entrar}>
<TouchableOpacity style={styles.controlButton5}  onPress={() => verificar()}>
  
<Text style={styles.controlButtonText}> ENTRAR </Text>
</TouchableOpacity>


<View style={{fontSize:20,margin:5,color:'white'}}>
<Text>{dados}</Text>
</View>

</View>
</View>


   </ScrollView>
    </SafeAreaView>


      
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
   <SafeAreaView style={styles.container7}> 
      <ScrollView style={styles.scrollView2}>

      <View style={styles.container8}>
   

     
      <TouchableOpacity  onPress={() => navigation.push('TrocarFoto')}>
      <Image 
      style={styles. imgPerfil3}
      source = {perfil}
      
        />
       

        </TouchableOpacity>
        

<TouchableOpacity style={styles.controlButton8}>
<Text style={styles.controlButtonText7}>Tudo </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.controlButton8}>
<Text style={styles.controlButtonText8}>Música </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.controlButton8}>
<Text style={styles.controlButtonText8}>Podcast </Text>
</TouchableOpacity>

      </View>



      <View style={styles.container8}> 
    
    <View style={styles.coluna2}>
      <Image 
    style={styles. imgCard1}
    source = {menosMais}
      />

  <Text style={styles.textCard}> Menos É mais </Text>

    </View>

    <View style={styles.coluna2}>

    <Image 
    style={styles. imgCard1}
    source = {mixPop}
      />

  <Text style={styles.textCard}> Mix Pop</Text>
    </View>

 
  </View>


  <View style={styles.container8}> 
    
    <View style={styles.coluna3}>
      <Image 
    style={styles. imgCard1}
    source = {postMalone}
      />

  <Text style={styles.textCard}> This is Poat Malone </Text>

    </View>

    <View style={styles.coluna3}>

    <Image 
    style={styles. imgCard1}
    source = {ph}
      />

  <Text style={styles.textCard}> Mix de MC Ph</Text>
    </View>

 
  </View>
  <View style={styles.container9}> 
    
    <View style={styles.coluna4}>
      <Image 
    style={styles. imgCard1}
    source = {kayBlack}
      />

  <Text style={styles.textCard}> This is kayBlack </Text>

    </View>

    <View style={styles.coluna4}>
    <TouchableOpacity   onPress={() => navigation.push('TocarMusica')}> <Image 
    style={styles. imgCard1}
    source = {pagode}
      /></TouchableOpacity>

  <Text style={styles.textCard}> Pagodeira </Text>
    </View>
  </View>





  <View style={styles.container8}> 
    
    <View style={styles.coluna5}>
      <Image 
    style={styles. imgCard1}
    source = {mix}
      />

  <Text style={styles.textCard}> Mix 2010 </Text>

    </View>

    <View style={styles.coluna5}>

    <Image 
    style={styles. imgCard1}
    source = {funkLactea}
      />

  <Text style={styles.textCard}>Funk Lactea</Text>
    </View>

 
  </View>

 

    <Text style={styles.textScroll2} >Atualizado com músicas novas </Text>
  
   <TouchableOpacity>
  <View style={styles.colunaNovidade}>
  <Image 
   style={styles. imgCardNovidade}
   source = {noviAtualizado}
     />
  
  </View>
  </TouchableOpacity>


  <Text style={styles.textScroll}>O melhor de cada artista</Text>
<View style={styles.container8}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {bruninho}/> 
      <Text style={styles.textHorizontal}>Bruno Mars</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {jorgeMateus}/> 
      <Text style={styles.textHorizontal}>Jorge e Mateus</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixHenJuliano}/> 
      <Text style={styles.textHorizontal}>Henrique&Juliano</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixLuan}/> 
      <Text style={styles.textHorizontal}>Luan Santana </Text>
    </TouchableOpacity>
  </ScrollView>
</View>


<Text style={styles.textScroll2}>Seus mixes favoritos</Text>
<View style={styles.container8}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixPop}/> 
      <Text style={styles.textHorizontal}>Mix Pop</Text>
    </TouchableOpacity>
    

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixRomantico}/> 
      <Text style={styles.textHorizontal}>Mix Romantico</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixSamba}/> 
      <Text style={styles.textHorizontal}>Mix Samba</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {mixHenJuliano}/> 
      <Text style={styles.textHorizontal}>Mix H&J</Text>
    </TouchableOpacity>
  </ScrollView>
</View>


<Text style={styles.textScroll2}>Tocados recentemente</Text>
<View style={styles.container8}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {menosMais}/> 
      <Text style={styles.textHorizontal2}>Menos É Mais</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {jorgeMateus}/> 
      <Text style={styles.textHorizontal2}>Jorge e Mateus</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {mixPop}/> 
      <Text style={styles.textHorizontal2}>Mix Pop</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {mixSamba}/> 
      <Text style={styles.textHorizontal2}>Mix Samba</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {bruninho}/> 
      <Text style={styles.textHorizontal2}>Mix Bruninho</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImgRecentemente} source = {mixRomantico}/> 
      <Text style={styles.textHorizontal2}>Mix Romantico</Text>
    </TouchableOpacity>
  </ScrollView>
</View>


<Text style={styles.textScroll2}>Seus artistas favoritos</Text>
<View style={styles.container8}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
    <TouchableOpacity>
      <Image style={styles. artistaImg2} source = {artista1}/> 
      <Text style={styles.textHorizontal}>Henrique&Juliano</Text>
    </TouchableOpacity>
    

    <TouchableOpacity>
      <Image style={styles. artistaImg2} source = {artista2}/> 
      <Text style={styles.textHorizontal3}>Veigh</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg2} source = {artista3}/> 
      <Text style={styles.textHorizontal3}>Jorge e mateus</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg2} source = {artista4}/> 
      <Text style={styles.textHorizontal3}>Yunk Vino</Text>
    </TouchableOpacity>
  </ScrollView>
</View>

<Text style={styles.textScroll2}>Podcasts originais Spotify</Text>
<View style={styles.container8}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {podcast1}/> 
      <Text style={styles.textHorizontal}>PodPah</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {podcast2}/> 
      <Text style={styles.textHorizontal}>Café da Manhã</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {podcast3}/> 
      <Text style={styles.textHorizontal}>Assasinos em série</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image style={styles. artistaImg} source = {podcast4}/> 
      <Text style={styles.textHorizontal}>Mitos e Lendas</Text>
    </TouchableOpacity>
  </ScrollView>
</View>


  
<View style={styles.colunaFooter2}>

<TouchableOpacity style={styles.controlButton9} onPress={() => navigation.push('Details')} >
  <Image
    style={styles.imgFooter}
    source={inicio}
  />

</TouchableOpacity>



<TouchableOpacity style={styles.controlButton9} onPress={() => navigation.push('Dev')}>
  <Image
    style={styles.imgFooter}
    source={usuario}
  />

</TouchableOpacity>



<TouchableOpacity style={styles.controlButton9} onPress={() => navigation.push('Biblioteca')}  >
  <Image
    style={styles.imgFooter}
    source={biblioteca}
  />

</TouchableOpacity>
</View>
    
  </ScrollView>
    </SafeAreaView>

    </View>
  );
}


function BibliotecaScreen({ navigation }) {
  return (
<View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container20}>
        <ScrollView style={styles.scrollView21}>

          <View style={styles.container20}>

            <View style={styles.container21}>

              <View style={styles.coluna21}>
                <Image
                  style={styles.image21}
                  source={perfil}

                />
              </View>

              <View style={styles.colunatext21}>
                <Text style={styles.texto}> Sua Biblioteca </Text>

              </View>

              <View style={styles.colunaIcon21}>
                <Image
                  style={styles.image2}
                  source={pesImg}

                />
              </View>

              <View style={styles.colunaIcon22}>
                <TouchableOpacity  onPress={() => navigation.push('QrCode')}>
      <Image 
      style={styles. image3}
      source = {moreImg}
      
        />
       

        </TouchableOpacity>
        
              </View>


            </View>

            <View style={styles.container21}>
              <View style={styles.colunab}>
                <TouchableOpacity style={styles.controlButton21}>
                  <Text style={styles.controlButtonText21}>Playlists </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.colunab}>
                <TouchableOpacity style={styles.controlButton21}>
                  <Text style={styles.controlButtonText21}>Podcasts </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.colunab}>
                <TouchableOpacity style={styles.controlButton21}>
                  <Text style={styles.controlButtonText21}>Álbuns </Text>
                </TouchableOpacity>

              </View>

              <View style={styles.colunab}>
                <TouchableOpacity style={styles.controlButton21}>
                  <Text style={styles.controlButtonText21}>Artistas </Text>
                </TouchableOpacity>

              </View>
            </View>


            <View style={styles.container21}>
              <View style={styles.colunabla}>
                <Image
                  source={clasImg}
                  style={styles.imgicon21}
                />
              </View>

              <View style={styles.colunabla2}>
                <Text style={styles.texticon21}>Recentes</Text>
              </View>

              <View style={styles.colunabla3}>
                <Image
                  source={dadosImg}
                  style={styles.imgicon21}
                />
              </View>


            </View>

            <View style={styles.container21}>

              <View style={styles.colunafoto2}>
                <Image
                  source={love}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Música Curtida </Text>
                <Text style={styles.album}>playlist-500 músicas </Text>
              </View>
            </View>

            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={bacoImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Bluesman </Text>
                <Text style={styles.album}>Álbum de Baco Exu do Blues </Text>
              </View>
            </View>

            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={macImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Swimming</Text>
                <Text style={styles.album}>Álbum de Mac Miller</Text>
              </View>


            </View>


            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={lana2Img}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Paradise</Text>
                <Text style={styles.album}>Álbum Lana Del Rey</Text>
              </View>


            </View>


            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={amyImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Back to Black</Text>
                <Text style={styles.album}>Álbum de Amy Winehouse </Text>
              </View>


            </View>


            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={lanaImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Born to Die </Text>
                <Text style={styles.album}>Álbum de Lana Del Rey</Text>
              </View>


            </View>



            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={yeImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Graduation</Text>
                <Text style={styles.album}>Álbum de Kanye West</Text>
              </View>


            </View>



            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={tomImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Inédito </Text>
                <Text style={styles.album}>Álbum de Tom Jobim</Text>
              </View>


            </View>


            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={cor}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Cor</Text>
                <Text style={styles.album}>Álbum de ANAVITÓRIA</Text>
              </View>


            </View>

            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={jr}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Imunidade Musical </Text>
                <Text style={styles.album}>Álbum de Charlie Brown Jr.</Text>
              </View>


            </View>

            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={bk}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>ICARUS </Text>
                <Text style={styles.album}>Álbum de BK</Text>
              </View>


            </View>

            <View style={styles.container21}>
              <View style={styles.colunafoto2}>
                <Image
                  source={chicoImg}
                  style={styles.imgbibi}
                />
              </View>

              <View style={styles.colunaNome2}>
                <Text style={styles.nome2}>Chico Buarque de Hollanda </Text>
                <Text style={styles.album}>Álbum de Chico Buarque</Text>
              </View>


            </View>

            <View style={styles.colunaFooter2}>

              <TouchableOpacity style={styles.controlButton99} onPress={() => navigation.push('Details')} >
                <Image
                  style={styles.imgFooter}
                  source={inicio}
                />

              </TouchableOpacity>



              <TouchableOpacity style={styles.controlButton99} onPress={() => navigation.push('Dev')}>
                <Image
                  style={styles.imgFooter}
                  source={usuario}
                />

              </TouchableOpacity>



              <TouchableOpacity style={styles.controlButton99} onPress={() => navigation.push('Biblioteca')}  >
                <Image
                  style={styles.imgFooter}
                  source={biblioteca}
                />

              </TouchableOpacity>
            </View>

          </View>



        </ScrollView>
      </SafeAreaView>
    </View>


  );
}


function DevScreen({ navigation }) {
  return (

<View style={{ flex: 1 }}>
<SafeAreaView style={styles.container30}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.container30}>

    <View style={styles.container31}>

    <View style={styles.coluna21}>
                <Image
                  style={styles.image21}
                  source={perfil}

                />
              </View>

              <View style={styles.colunatext21}>
                <Text style={styles.texto}> Devs </Text>

              </View>

              <View style={styles.colunaIcon21}>
                <Image
                  style={styles.image2}
                  source={pesImg}

                />
              </View>

              <View style={styles.colunaIcon22}>
                <Image
                  style={styles.image3}
                  source={moreImg}

                />
              </View>

         
    
      </View>

      <View style={styles.container31}>

      <View style={styles.colunafoto}>
      <Image 
        style={styles.image}
        source = {joiceImg}
      />
      
      </View>

      </View>

      <View style={styles.container31}>

      <View style={styles.colunaNome}>
        <Text style={styles.nome}> Joice Leal </Text>
        <Text style={styles.telefone}>(55)11-98992-1948</Text>
      </View>
      </View>

      <View style={styles.container31}>

      <View style={styles.colunafoto}>
      <Image 
        style={styles.image}
        source = {emilyImg}
      />
      </View>

      </View>

      <View style={styles.container31}>

      <View style={styles.colunaNome}>
        <Text style={styles.nome}> Emily Amaro </Text>
        <Text style={styles.telefone}> (55)11-95769-0907 </Text>
      </View>
      </View>

      <View style={styles.container31}>

      <View style={styles.colunafoto}>
      <Image 
        style={styles.image}
        source = {stephanyImg}
      />
      </View>

      </View>

      <View style={styles.container31}>

      <View style={styles.colunaNome}>
        <Text style={styles.nome}> Stephany Ramos </Text>
        <Text style={styles.telefone}> (55)11-98526-1888 </Text>
      </View>
      </View>

      <View style={styles.container31}>

      <View style={styles.colunafoto}>
      <Image 
        style={styles.image}
        source = {thiagoImg}
      />
      </View>

      </View>

      <View style={styles.container31}>

      <View style={styles.colunaNome}>
        <Text style={styles.nome}> Thiago da Silva </Text>
        <Text style={styles.telefone}> (55)11-94862-4468</Text>
      </View>
      </View>
    
      <View style={styles.colunaFooter2}>

<TouchableOpacity style={styles.controlButton999}  onPress={() => navigation.push('Details')} > 
<Image 
 style={styles. imgFooter}
 source = {inicio}
   />

</TouchableOpacity>



<TouchableOpacity style={styles.controlButton999} onPress={() => navigation.push('Dev')}> 
<Image 
 style={styles. imgFooter}
 source = {usuario}
   />

</TouchableOpacity>



<TouchableOpacity style={styles.controlButton999} onPress={() => navigation.push('Biblioteca')}  > 
<Image 
 style={styles. imgFooter}
 source = {biblioteca}
   />

</TouchableOpacity>
</View>
    </View>

      
      </ScrollView>
    </SafeAreaView>
</View>

  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Biblioteca" component={BibliotecaScreen} options={{headerShown:false}} />
        <Stack.Screen name="Dev" component={DevScreen} options={{headerShown:false}} />
        <Stack.Screen name="TocarMusica" component={TocarMusica} options={{headerShown:false}} />
        <Stack.Screen name="TrocarFoto" component={TrocarFoto} options={{headerShown:false}} />
        <Stack.Screen name="QrCode" component={QrCode} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'column',    
    justifyContent:'center',
    color:'white',
  
  },

  scrollView:{
    backgroundColor: 'black',
    
  },
  
    

  container2: {
    
    backgroundColor: 'black',
    flexDirection:'row',   
    alignItems:'center',
    justifyContent:'center',
  },

  

  primeiraColuna:{    
    width:45,    
    height:50,
    backgroundColor:'#696969',
    marginLeft:10,
    marginBottom:0,
    marginTop:30,
    flex:1 ,  
    flexDirection:'row',   
    marginLeft:8,
    borderRadius: 10, 
  
  },


  colunaBotao:{
    width:330,
    height:55,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },

  coluna:{    
    width:45,    
    height:50,
    backgroundColor:'#696969',
    marginLeft:10,
    marginBottom:0,
    marginTop:5,
    flex:1 ,  
    flexDirection:'row',   
    marginLeft:8,
    borderRadius: 10, 
  
  },

  colunaGrande:{
    width:400,    
    height:80,
    marginLeft:5,
    borderRadius: 5,
 
    backgroundColor:'black',

  },


  colunaGrande2:{
    width:420,    
    height:60,
    
    borderRadius: 15,
    marginTop:20,
    backgroundColor:'#dcdcdc',
    
  },

  imgCard1:{
  width:50,    
  height:50,
  borderRadius: 5,

  },

  textCard:{
  fontSize:15,
  color: 'white',
  marginLeft:5,
  fontWeight: '600',
  marginTop:13,
  },

  textsubtitulo:{
  fontSize:15,
  color: 'pink',
  marginLeft:10,
  fontWeight: '600',
  marginTop:13,
  },

  text:{
    marginTop:40,
    fontWeight:'600',
    fontSize:30,
    color:'white',
    marginRight:30,
   textAlign:'left',
    marginLeft:15,


  },
  imgPerfil:{
    width:40,    
    height:40,
    borderRadius: 50,
    marginLeft:10,
    marginTop:15,
  },

  
  imgLogin:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    width:40,
    height:30,
  marginLeft:30,
  
  
  },

  img:{
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
    width:330,
    height:42,
    marginRight:70,
    marginTop:15,
  },

  img2:{
    borderRadius: 30,
    justifyContent:'center',
    width:330,
    height:60,
  },


  colunaTxtLogin:{
    marginLeft:37,
    width:400,    
    height:130,
    color:'white',
    fontSize:30,
    fontWeight: '800',
    textAlign:'center',
  },


  caixaDeTexto:{
    backgroundColor:'#dcdcdc',
    color:'black',
    paddingLeft: 25,
    height:49,   
    width:320, 
    borderRadius:15,
    marginRight:18,
  },

  caixaSenha:{
    backgroundColor:'#dcdcdc',
    color:'black',
    paddingLeft: 25,

    height:49,   
    width:320, 
    borderRadius:15,
   marginRight:30,
    marginBottom:60,
  },
  
  tituloInput:{
color:'white',
fontSize:15,

  },

  controlButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
    width:330,
    height:42,
    marginLeft:65,
    
   },
   
  controlButton2: {
    backgroundColor: 'black',
    borderRadius: 30,
    width:330,
    height:50,
    marginLeft:65,
    marginTop:5,
    alignItems:'center',
    justifyContent:'center',
   },
   controlButton3: {
    backgroundColor: 'black',
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
    width:330,
    height:60,
    marginLeft:65,
    marginTop:5,
   },
   controlButtonText: {
    color: 'black',
    fontWeight: '700',
    alignItems:'center',
    justifyContent:'center',
  
  },
    
    controlButton5:{
      backgroundColor: '#32cd32',
     marginBottom:80,
      borderRadius: 30,
      alignItems:'center',
      justifyContent:'center',
      width:330,
      height:40,
      
    },
    artistaImg:{
      height:120,
      width:130,
      marginLeft:10,
    },
    artistaImg2:{
      height:120,
      width:130,
      marginLeft:10,
      borderRadius:80,
    },
    artistaImgRecentemente:{
      height:90,
      width:100,
      marginLeft:10,
    },

    textScroll:{
      marginTop:10,
      marginBottom:5,
      fontSize:20,
      color:'white',
      marginLeft:10,
      fontWeight:600,

    },
    textScroll2:{
      marginTop:25,
      marginBottom:10,
      fontSize:20,
      color:'white',
      marginLeft:10,
      fontWeight:600,

    },
    textHorizontal:{
      color:'white',
      fontSize:13,
      marginLeft:15,
      marginTop:3,
      fontWeight:600
    },
    textHorizontal2:{
      color:'white',
      fontSize:10,
      marginLeft:15,
      marginTop:3,
      fontWeight:600
    },
    
    textHorizontal3:{
      color:'white',
      fontSize:13,
      marginLeft:25,
      marginTop:3,
      fontWeight:600
    },





      

  



      container7: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection:'column',    
 
        color:'white',
      
      },
    
      scrollView2:{
        backgroundColor: 'black',
        
      },
   
   
  
        container8: {
          backgroundColor: 'black',
          flexDirection:'row',   
         
        },
      
    
      container9: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection:'row',   
    
    
      },
    
      coluna:{    
        width:150,
        height:115,
        marginLeft:0,
        borderRadius: 15,
        marginTop:10,
      },
    
    
    
    colunaNovidade:{
    width:347,
    height:137,
    borderRadius:10,
    marginTop:10,
    marginLeft:10,
    marginBottom:30,
    },
    
    imgCardNovidade:{
      width:347,
      height:137,
      borderRadius:10,
    },
    
    
    
      coluna2:{    
        width:170,    
        height:50,
        backgroundColor:'#696969',
        marginLeft:10,
        marginTop:15,
        flexDirection:'row',   
        marginLeft:17,
        borderRadius: 5, 
        marginBottom:10,
        
      
      },
    
    
      coluna3:{    
        width:170,    
        height:50,
        backgroundColor:'#696969',
        marginLeft:10,
      
        flexDirection:'row',   
        marginLeft:17,
        borderRadius: 5, 
        marginBottom:10,
    
        
      },
    
      coluna4:{    
        width:170,    
        height:50,
        backgroundColor:'#696969',
        marginLeft:10,
      
        flexDirection:'row',   
        marginLeft:17,
        borderRadius: 5, 
        marginBottom:10,
    
        
      },
    
      coluna5:{    
        width:170,    
        height:50,
        backgroundColor:'#696969',
        marginLeft:10,
      
        flexDirection:'row',   
        marginLeft:17,
        borderRadius: 5, 
        marginBottom:10,
    
       
      },
    
      colunamix:{
        width:80,
        height:80,
        backgroundColor:'white',
      },
     
      colunaFooter:{    
        width:125,    
        height:60,
        marginLeft:15,
        flexDirection:'row',   
        
      
      },
      colunaFooter2:{    
        flexDirection:'row', 
        marginTop:5, 
        marginBottom:5, 
        justifyContent:'center',
        marginLeft:70,
        
      
      },
    
    
      colunaGrande2:{
        width:420,    
        height:60,
        marginLeft:3,
        borderRadius: 15,
        marginTop:20,
        backgroundColor:'#dcdcdc',
        
      },
    
      imgCard1:{
      width:50,    
      height:50,
      borderRadius: 5,
    
    
      },
    
      textCard:{
      fontSize:11,
      color: 'white',
      marginLeft:5,
      fontWeight: '600',
      marginTop:15,
      },
    
      textTitulo:{
      fontSize:20,
      color: 'white',
      marginLeft:10,
      marginTop:30,
      },
     
      
    
      textsubtitulo:{
        fontSize:18,
        color: 'white',
        fontWeight: '600',
        marginTop:35,
        marginRight:50,
      },
    
    
    
      imgPerfil3:{
        width:35,    
        height:35,
        borderRadius: 50,
        marginLeft:15,
        marginTop:55,
        
      },
      imgPerfilCantor:{
        width:45,    
        height:45,
        borderRadius: 50,
        marginLeft:10,
        marginTop:20,
      },
    
    
      controlButton8: {
        backgroundColor: '#32cd32',
        padding:2,
        borderRadius: 30,
        marginTop:58,
        width:65,
        height:27,
        marginLeft:17,
        marginBottom:15
       },
       
       
      controlButton9: {
        backgroundColor: 'black',
        marginTop:55,
        width:125,
        height:60,
        marginLeft:5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
       },
       controlButton99: {
        backgroundColor: 'black',
        marginTop:5,
        width:125,
        height:60,
        marginLeft:5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
       },
       controlButton999: {
        backgroundColor: 'black',
        marginTop:5,
        width:125,
        height:60,
        marginLeft:5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
       },
       
    
       controlButtonText7: {
        color: 'black',
        fontWeight: '500',
        marginLeft:15,
        marginTop:1,
       },
       controlButtonText8: {
        color: 'black',
        fontWeight: '500',
        marginLeft:7,
        marginTop:1,
       },
       
       controlButtonText9: {
        color: 'black',
        fontWeight: '400',
        marginTop:0,
        textAlign:'center',
        marginBottom:15,
       },
       
  







       container20: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        flexDirection:'column', 
        backgroundColor:'black',
      },
    
      container21: {
        
        backgroundColor: 'black',
        flexDirection:'row',   
    
      },
      
    
      coluna21:{
        width:40,    
        height:35,
        marginTop:35,
        backgroundColor:'black',
        marginLeft:1,
        
        
      },
    
      colunab:{
        width:80,    
        height:30,
        marginTop:22,
      marginBottom:10,
        backgroundColor:'black',
        
    
        
        
      },
    
      colunatext21:{
        width:180,    
        height:35,
        marginTop:35,
        backgroundColor:'black',
        marginLeft:8,
       marginRight:15,
    
      },
    
      colunaIcon21:{    
        width:40,    
        height:35,
        backgroundColor:'black',
        
       marginTop:35,
        marginLeft:15,
        textAlign:'center',
        alignItems:'center',
      
        
      },
    
    
      colunaIcon22:{    
        width:35,    
        height:35,
        backgroundColor:'black',
       marginTop:35,
      marginLeft:13,
        textAlign:'center',
        alignItems:'center',
      
        
      },
      
      usu:{
        width:40,    
        height:35,
        marginRight:23,
        marginTop: 10,
        marginBottom:10,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
       
        
      },
      colunafoto2:{
        width:68,    
        height:68,
        backgroundColor:'black',
        marginLeft:1,
        marginTop:17,
        
        alignItems:'center',
        justifyContent:'center',
      
        
      },
    
      imgbibi:{
        width:68,    
        height:68,
        alignItems:'center',
        justifyContent:'center',
    
      },
    
      colunabla:{
        height:21,
        width:30,
        backgroundColor:'black',
        marginTop:8,
      },
    
      colunabla2:{
        height:21,
        width:60,
        backgroundColor:'black',
        marginLeft:1,
        marginTop:8,
      },
    
      colunabla3:{
        height:21,
        width:60,
        backgroundColor:'black',
        marginLeft:234,
        marginTop:8,
      },
    
    
    
      colunaNome2:{
        width:200,    
        height:80,
        backgroundColor:'black',
        marginLeft:8,
        marginTop:10,
        },
    
      scrollView21: {
        backgroundColor: 'black',
        marginHorizontal: 20,
        
      },
      image21: {    
        width:35,
        height: 35,
        marginLeft:2,
        backgroundColor: '#0553',
        borderRadius:100,
        
        alignItems:'center',
        justifyContent:'center',
        
      },
    
      image2: {    
        width:30,
        height: 30,
       
        alignItems:'center',
        justifyContent:'center',
        
      },
    
    
      image3: {    
        width:30,
        height: 30,
       
        alignItems:'center',
        justifyContent:'center',
        
      },
    
    
    
      
          nome2: {
            color: 'white',
            fontWeight: '700',
            fontSize: 15, 
            marginTop: 20,
            marginBottom: 5,
          },
         album:{
          color: 'white',
          fontWeight: '300',
          fontSize: 10, 
         
         },
          texto: {
           marginRight:10,
            fontWeight: '600',
            fontSize:25,
            alignItems: 'center',
            color:'white',
          },
    
    
          controlButton21: {
            backgroundColor: '#696969',
            padding:2,
            borderRadius: 30,
           
            width:65,
            height:27,
            marginLeft:8,
         
           },
           
        
           controlButtonText21: {
            color: 'white',
            fontWeight: '400',
            marginLeft:8,
            marginTop:1,
            fontSize:13,
            alignItems:'center',
        justifyContent:'center',
           },
           controlButtonText21: {
            color: 'white',
            fontWeight: '400',
            marginLeft:8,
            marginTop:1,
            fontSize:13,
            alignItems:'center',
        justifyContent:'center',
           },
    
    
           imgicon21:{
            height:18,
            width:18,
            marginLeft:4,
            
    
           },
    
           texticon21:{
            fontWeight: '700',
            marginTop:1,
            fontSize:13,
            color:'white',
    
           },











           container30: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            flexDirection:'column', 
            backgroundColor:'black',
          },
        
          container31: {
           
            backgroundColor: 'black',
            flexDirection:'row',   
        
          },
        
          colunaadm:{
            width:100,    
            height:60,
            backgroundColor:'black',
            marginLeft:1,
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            flex:1  
          },
        
          colunaIcon:{    
            width:35,    
            height:60,
            backgroundColor:'black',
            marginRight:23,
           
            marginBottom:10,
            textAlign:'center',
            alignItems:'center',
          
            
          },
          usu:{
            width:40,    
            height:35,
            marginRight:23,
            marginTop: 10,
            marginBottom:10,
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
           
            
          },
          colunafoto:{
            width:100,    
            height:220,
            backgroundColor:'black',
            marginLeft:1,
            resizeMode: 'contain',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 20,
            borderColor:'green',
            marginBottom:15,
            flex:1,  
            marginTop:25,
          },
          colunaNome:{
            width:100,    
            height:80,
            backgroundColor:'black',
            marginLeft:1,
          
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            flex:1 
          },
        
          scrollView: {
            backgroundColor: 'black',
            marginHorizontal: 20,
            
          },
          image: {    
            width:200,
            height: 200,
            backgroundColor: '#0553',
            borderRadius:100,
            borderWidth:2,
            borderColor: 'green',
            alignItems:'center',
            justifyContent:'center',
            
          },
          
              nome: {
                color: 'white',
                fontWeight: '700',
                fontSize: 22, 
                marginTop: 10,
                marginBottom: 7,
              },
             telefone:{
              color: 'green',
              fontWeight: '700',
              fontSize: 22, 
              marginBottom:20,
             },
           



});



export default App;
