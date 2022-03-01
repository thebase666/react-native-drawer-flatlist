import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, icons } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      {/* Calories and Favorite */}
      <View style={{ flexDirection: "row" }}>
        {/* Calories */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ color: COLORS.darkGray2 }}>
            {item.calories} Calories
          </Text>
        </View>

        {/* Favorite */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavorite ? COLORS.primary : COLORS.gray2,
          }}
        />
      </View>

      {/* Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      {/* Info */}
      <View
        style={{
          marginTop: -20,
          alignItems: "center",
        }}
      >
        <Text style={{}}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: "center",

          }}
        >
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.radius }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
