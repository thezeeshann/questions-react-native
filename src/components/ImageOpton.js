import { Image, Text, Pressable } from "react-native";
import { style } from "../../App.Style";
import PropTypes from "prop-types"; // ES6

export function Option({ image, text, isSelected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[style.optionContainer, isSelected ? style.selectedContainer : {}]}
    >
      <Image
        resizeMode="contain"
        style={style.optionImage}
        source={{
          uri: image,
        }}
      />
      <Text style={[isSelected ? style.selectedText : style.optionText]}>
        {text}
      </Text>
    </Pressable>
  );
}

Option.PropTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

Option.defaultProps = {
  isSelected: false,
  onPress: () => {},
};
