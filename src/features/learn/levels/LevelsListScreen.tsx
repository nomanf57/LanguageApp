import React, { FC } from 'react';
import { Level } from '@core/types/Level';

import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { LevelItem, ItemSeparator } from '@common/components';
import { useNavigation } from '@react-navigation/native';
import { Route } from 'navigation/routes';
import { useLevels } from '@core/hooks';
import style from './styles';

const LevelsListScreen: FC = () => {
  const navigation = useNavigation();
  const { levels } = useLevels();

  const renderLevelItem: ListRenderItem<Level> = ({ item }) => (
    <LevelItem
      level={item}
      onPress={level => {
        navigation.navigate(Route.Exercise);
      }}
    />
  );

  const itemSeparator = React.useMemo(() => <ItemSeparator />, []);

  const levelsList = React.useMemo(
    () => (
      <FlatList
        data={levels}
        renderItem={renderLevelItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => itemSeparator}
      />
    ),
    [levels],
  );

  return <SafeAreaView style={style.container}>{levelsList}</SafeAreaView>;
};

export default LevelsListScreen;
