import React from 'react';
import { View, Text } from 'react-native';

export default function FuriganaOverlay({ word, furigana }) {
  // Display furigana above the word
  return (
    <View>
      <Text>{furigana}</Text>
      <Text>{word}</Text>
    </View>
  );
}