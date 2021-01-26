<script src="http://localhost:8097"></script>
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, CameraRoll } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from 'expo-image-picker';

export default function Bottom(props) {

    const [image, setImage] = useState(null);

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
        console.log(result);

        if (!result.cancelled){
            setImage(result.uri);
        }
    };
    
    takePicture = async () => {
        
        if (this.camera) {
          let photo = await this.camera.takePictureAsync({
              quality: 1,
          });
          console.log(photo);
          
          if(photo){
              setImage(photo.uri); 
          }
        }
    }


    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.group2}>
                <View style={styles.rect}>
                    <View style={styles.iconRow}>
                        <TouchableOpacity
                            style={styles.pickImageButton}
                            onPress={()=>this.pickImage()}
                        >
                        <FontAwesomeIcon name="photo" style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.takePictureButton}
                            onPress={()=>this.takePicture()}
                        >
                        <MaterialCommunityIconsIcon
                            name="camera-iris"
                            style={styles.icon2} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {},
  group2: {
    width: 360,
    height: 78
  },
  rect: {
    width: 360,
    height: 78,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row"
  },
  pickImageButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent'                 
  },
  takePictureButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    color: "#fff",
    fontSize: 38,
    width: 40,
    height: 40,
    marginTop: 2
  },
  icon2: {
    color: "#fff",
    fontSize: 42,
    height: 45,
    width: 45,
    marginLeft: 65
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 160,
    marginTop: 16
  }
});

