import { StatusBar, Image, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

import { fetchBodyPartExercises } from "../api/exerciseDB";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

const Exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodyPart) => {
    const data = await fetchBodyPartExercises(bodyPart);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-2xl"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-cyan-500 mx-4 absolute rounded-full flex justify-center items-center pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back" size={30} />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-slate-700 capitalize"
        >
          <Text className="text-cyan-500">{item.name}</Text> exercises
        </Text>

        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
