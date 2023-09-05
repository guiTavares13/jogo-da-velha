import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export default (props) => {
    const { label, onClick } = props;
  
    const colorStyle = label === "X" ? styles.textButtonX : styles.textButtonO;
    const resetButtonTextStyle =
      label === "Reiniciar" ? styles.resetButtonText : null;
  
    return (
      <TouchableHighlight style={[styles.button]} onPress={onClick}>
        <Text style={[styles.textButton, colorStyle, resetButtonTextStyle]}>{label}</Text>
      </TouchableHighlight>
    );
  };
  

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        color: "grey",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginRight: 10
    },
    textButton: {
        fontSize: 40
    },
    textButtonX: {
        color: "red"
    },
    textButtonO: {
        color: "blue"
    },
    resetButtonText: {
        fontSize: 20,
        color: 'green'
    }

});
