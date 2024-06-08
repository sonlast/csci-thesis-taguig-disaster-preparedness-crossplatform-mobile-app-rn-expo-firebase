import React, { useState, useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import * as ImagePicker from "expo-image-picker";
import { ImageProvider, useImage } from "./miscellaneous/ImageContext";
import {
  useFonts,
  Anybody_700Bold,
  Anybody_700Bold_Italic,
} from "@expo-google-fonts/anybody";

import Categoriez from "./Categories";
import Stormnav from "./categories/Stormnav";
import Typhoonnav from "./categories/Typhoonnav";
import Earthquakenav from "./categories/Earthquakenav";
import Floodnav from "./categories/Floodnav";
import Landslidenav from "./categories/Landslidenav";
import Firesnav from "./categories/Firesnav";
import Settingz from "./Settings";
import TermsConditions from "./settings/TandCSettings";
import PrivacyPolicy from "./settings/PPSettings";
import SendFeedback from "./settings/SFSettings";
import ReportaProblem from "./settings/RaPSettings";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categoriez"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#660000",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        // initialRouteName="Categories"
        name="Categoriez"
        component={Categoriez}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Storm"
        component={Stormnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Typhoon"
        component={Typhoonnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Earthquake"
        component={Earthquakenav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Flood"
        component={Floodnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Landslide"
        component={Landslidenav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Fires"
        component={Firesnav}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settingz"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#660000",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        // initialRouteName="Categories"
        name="Settingz"
        component={Settingz}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Terms and Conditions"
        component={TermsConditions}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Send Feedback"
        component={SendFeedback}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
      <Stack.Screen
        name="Report a Problem"
        component={ReportaProblem}
        options={{
          headerTitleStyle: {
            fontFamily: "Anybody_700Bold",
            fontSize: 17.5,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  const db = getFirestore();
  const auth = getAuth();
  const imageProps = useImage() || {};
  const image = imageProps.image || null;
  const setImage = imageProps.setImage || (() => {});
  const [userName, setUserName] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");

  const navigator = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUserName(userData.username || "");
          setUserFirstname(userData.firstName || "");
          setUserLastname(userData.lastName || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth, db]);

  let [fontsLoaded, fontError] = useFonts({
    Anybody_700Bold_Italic,
    Anybody_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch((error) => console.log(error));

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch((error) => console.log(error));

    if (!result.cancelled && result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Drawer.Navigator
      initialRouteName="Categories"
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#ffffff",
                borderBottomwWidth: 1,
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                {!image && (
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <MaterialCommunityIcons
                      name="upload"
                      size={24}
                      color="#ffffff"
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        color: "#ffffff",
                        fontFamily: "Anybody_700Bold",
                      }}
                    >
                      Upload Profile Picture
                    </Text>
                  </View>
                )}
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      borderWidth: 3,
                      borderColor: "#ffffff",
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "Anybody_700Bold",
                  marginTop: 30,
                }}
              >
                @{userName}
              </Text>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 12,
                  fontFamily: "Anybody_700Bold",
                  marginTop: 10,
                }}
              >
                {userFirstname} {userLastname}
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#660000",
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 15,
          fontFamily: "Anybody_700Bold",
        },
        drawerActiveBackgroundColor: "#ffffff",
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#ffffff",
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "Anybody_700Bold",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#660000",
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryStack}
        options={{
          drawerLabel: "Categories",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="card-multiple"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="cog"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Categoriez} // This won't be used, but is required
        options={{
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
        }}
        listeners={{
          focus: async () => {
            Alert.alert(
              "Quick Aid",
              "Are you sure you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    console.log("Cancelled logout.");
                    navigator.navigate("Categories");
                  },
                  style: "cancel",
                },
                {
                  text: "Log Out",
                  onPress: async () => {
                    await signOut(auth);
                    navigator.navigate("Login");
                  },
                },
              ]
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textt: {
    color: "#fff",
  },
});

export default function AppWrapper() {
  return (
    <ImageProvider>
      <App />
    </ImageProvider>
  );
}
