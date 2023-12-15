import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import { bodyParts } from "../constants";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-semibold text-cyan-500">
        Excercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} />
        )}
      />
    </View>
  );
};

const BodyPartCard = ({ item, index }) => {
  const router = useRouter();

  return (
    <Animated.View
      key={index}
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-lg absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={{ width: wp(44), height: wp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-lg"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wider"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BodyParts;
