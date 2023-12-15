import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(4) }}
          >
            Your <Text className="text-cyan-500">Personalized Path</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(4) }}
          >
            to Fitness Excellence
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(500).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-cyan-800 flex items-center justify-center mx-auto rounded-lg"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
