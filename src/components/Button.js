import React from "react";
import { Pressable, Text } from "react-native";
import { style } from "../../App.Style";
import PropType from "prop-types";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
    disabled={disabled}
      onPress={onPress}
      style={[style.buttonContainer, disabled ? style.disabledContainer : {}]}
    >
      <Text style={style.buttonText}>{text}</Text>
    </Pressable>
  );
};

Button.PropTypes = {
  text: PropType.string.isRequired,
  onPress: PropType.func.isRequired,
  disabled: PropType.bool,
};

export default Button;
