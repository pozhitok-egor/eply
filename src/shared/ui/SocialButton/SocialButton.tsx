import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export const SocialButton = (props: { text: string }) => {
  return (
    <TouchableHighlight>
      <Text>{props.text}</Text>
    </TouchableHighlight>
  );
};
