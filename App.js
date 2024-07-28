import { Text, View, Image, Alert } from "react-native";
import { style } from "./App.Style";
import { Option } from "./src/components/ImageOpton";
import questions from "./data";
import { useEffect, useState } from "react";
import Button from "./src/components/Button";

export default function App() {
  const [selected, setIsSelected] = useState(false);

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("Correct ✅");
      setIsSelected(null);
    } else {
      Alert.alert("Wrong ❌");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>{questions.question}</Text>
      <View style={style.optionContainers}>
        {questions.option.map((option) => (
          <Option
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setIsSelected(option)}
          />
        ))}
        <Button text="Check" disabled={!selected} onPress={onButtonPress} />
      </View>
    </View>
  );
}
