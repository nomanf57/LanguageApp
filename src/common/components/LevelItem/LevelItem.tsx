import React, { FC } from 'react';
import { Level } from '@core/types/Level';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type LevelItemProps = {
  level: Level;
  onPress: (level: Level) => void;
};

const LevelItem: FC<LevelItemProps> = ({ level, onPress }) => (
  <TouchableOpacity
    style={style.itemContainer}
    onPress={() => {
      onPress(level);
    }}
  >
    <Text style={style.levelName}>{level.name}</Text>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  itemContainer: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  levelName: {
    textAlignVertical: 'center',
  },
});

export default LevelItem;
