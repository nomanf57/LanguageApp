import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

const ItemSeparator: FC = () => <View style={style.separator} />;

const style = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#000000',
    opacity: 0.2,
  },
});

export default ItemSeparator;
