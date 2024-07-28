import { Text, View, Image, Alert } from "react-native";
import { style } from "./App.Style";
import { Option } from "./src/components/ImageOpton";
import questions from "./data";
import { useEffect, useState } from "react";
import Button from "./src/components/Button";

export default function App() {
  const [selected, setIsSelected] = useState(false);
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState()
  const [currentQuestion,setCurrentQuestion] = useState(questions.option[1])


  useEffect(()=>{
    if(currentQuestion>questions.question.length)
    Alert.alert("You Wonn")
      setCurrentQuestionIndex(0)
  },[])

  const onButtonPress = ()=>{
    if(selected.correct){
      Alert.alert("Correctttt")
    }else{
      Alert.alert("Wronggggggg")
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>{questions.question}</Text>
      <View style={style.optionContainers}>
        {questions.option.map((option) => (
          <Option
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected.id === option.id}
            onPress={() => setIsSelected(option)}
          />
        ))}
        <Button  text="Check" disabled={!selected} onPress={onButtonPress} />
      </View>
    </View>
  );
}
