import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useHistory } from 'react-router-native';
import { Camera } from 'expo-camera';
import { takePicture } from 'react-native-camera-hooks/src/takePicture';
import * as ImagePicker from 'expo-image-picker';

export default function TakePictures(props) {
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  let history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        console.log(props.location.state.locationOfImage);
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');

        const { galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(galleryStatus);
        setGalleryPermission(galleryStatus.status === 'granted');
      } catch (err) {
        console.log(err);
      }

    })();
  }, []);

  const takePicture = async () => {
    try {
      if (camera) {
        const data = await camera.takePictureAsync(null)
        setImage(data.uri)
        // history.push('/displayPhoto', { uri: data.uri });
      }
    } catch (err) {
      console.log(err);
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

  if (hasPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Camera style={styles.fixedRatio}
          ref={ref => setCamera(ref)}
          type={type}
          ratio={'1:1'} />
      </View>
      <Button
        title="Flip Image"
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
        onPress={() => takePicture()} />
      <Button
        title="Pick Image from Gallery"
        onPress={() => pickImage()} />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
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