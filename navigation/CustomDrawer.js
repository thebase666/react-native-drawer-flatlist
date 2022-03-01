import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, } from "@react-navigation/drawer";
import { COLORS, SIZES, constants, icons, dummyData, } from "../constants";
import { LogBox } from 'react-native';
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Favorite from "../screens/Favourite";
import Notification from "../screens/Notification";
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const CustomDrawerItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: 10,
        alignItems: "center",
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: null,
      }}
      onPress={onPress}//不给onpress 接参为空 
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: "black" }}
      />
      <Text style={{ marginLeft: 15, color: "black", }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentCotainerStyle={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 15, }}>
        <View style={{ alignItems: "flex-start", justifyContent: "center", }}>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={require("../assets/icons/cross.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: "black",//tintColor修改不透明像素颜色
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center", }}
          onPres={() => console.log("Profile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
            }}
          />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "black", }}>
              North Face
            </Text>
            <Text style={{ color: "black", }}>
              View your Profile
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}
        >
          <CustomDrawerItem
            label="Home"
            icon={icons.home}
            // isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Home");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Wallet");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Notification");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favorite}
            icon={icons.favorite}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Favorite");
            }}
          />
          {/* Line divider */}
          <View
            style={{
              height: 5,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: "gray",
            }}
          />
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help center" icon={icons.help} />
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        // screenOptions={{
        //   headerShown: false,
        // }}
        drawerType="slide"
        // overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          // backgroundColor: "transparent",
        }}
        // sceneContainerStyle={{
        //   backgroundColor: "transparent",
        // }}
        initialRouteName="Home"
        drawerContent={props => {
          return (
            <CustomDrawerContent navigation={props.navigation} />
          );
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
