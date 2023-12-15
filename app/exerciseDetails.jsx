import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { FadeInLeft } from "react-native-reanimated";

const exerciseDetails = () => {
  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        <Ionicons name="close-circle" size={30} />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}
          entering={FadeInLeft.duration(400).springify()}
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          className="text-neutral-800 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInLeft.duration(400).springify()}
        >
          Equipment:{" "}
          <Text className="font-bold text-neutral-600">{item.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          className="text-neutral-800 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInLeft.duration(400).springify()}
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-600">
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          className="text-neutral-800 tracking-wide"
          style={{ fontSize: hp(2) }}
          entering={FadeInLeft.duration(400).springify()}
        >
          Target:{" "}
          <Text className="font-bold text-neutral-600">{item.target}</Text>
        </Animated.Text>

        <Animated.Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}
          entering={FadeInLeft.duration(400).springify()}
        >
          Instructions
        </Animated.Text>
        {item.instructions.split(",").map((instruction, index) => (
          <Animated.Text
            key={index}
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-800"
            entering={FadeInLeft.duration(400)
              .delay(index * 200)
              .springify()}
          >
            {instruction}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
