import React, { FC } from 'react';
import { View } from 'react-native';

type SpaceVerticalProps = {
  space: number;
};

const SpaceVertical: FC<SpaceVerticalProps> = ({ space }) => (
  <View style={{ height: space }} />
);

export default SpaceVertical;
