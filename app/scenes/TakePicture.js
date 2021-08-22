import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, NativeModules } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ImgToBase64 from 'react-native-image-base64';
// import imageToBase64 from 'image-to-base64/browser';

export default function TakePictures() {
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      const { galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');

    })();
  }, []);

  const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null)
      setImage(data.uri)

    }
  }
  


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveImage = (photoUri) => {
    // const imageToBase64 = require('image-to-base64');
    console.log('hello')

    // const dataUrl = getDataUrl(photoUri);
    // console.log(dataUrl)
    // console.log(ImgToBase64)
    const data = ImgToBase64(photoUri)
    console.log(data)

    fetch("http://192.168.1.106:3000/image",
    {
      method: 'POST',
      body: JSON.stringify({
        title: 'image',
        body: data
      }).then(response => {
        console.log("image uploaded")
      }).catch(err => {
        console.log(err)
      })  
    })

    console.log('success')

    
    
    }
  


  if (hasPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Camera style={styles.fixedRatio}
        ref={ref => setCamera(ref)}
        type={type}
        ratio={'1:1'}/>
        </View>

        
          <Button
            title= "Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>

          </Button>
          <Button
          title="Take Picture"
          onPress={()=> takePicture()}/>

          <Button
          title="Pick Image from Gallery"
          onPress={()=> pickImage()}/>     

          <Button
          title="Save"
          onPress={()=> saveImage(image)}/>   
        
        {image && <Image source={{uri: image}} style={{flex: 1}}/>}

          </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});