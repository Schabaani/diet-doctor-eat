import React from 'react';
import {FlatList, Text, Image, StyleSheet, View, Platform} from 'react-native';
import {Rounded, Spacing} from '../../styles';
import {Button} from '../button';
import {SectionHeader} from '../section-header';

interface IMeal {
  title: string;
  image: string;
}

export interface IMeals {
  assets: [IMeal];
  type: 'Meal';
  header: string;
}

export const MealSection = (props: IMeals) => {
  return (
    <>
      <SectionHeader header={props.header} />
      <FlatList
        testID={`meal-flat-list-${props.header}`}
        data={props.assets}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={({item}) => {
          return (
            <Button style={styles.cardContainer}>
              <View style={styles.shadow}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
              <Text numberOfLines={2}>{item.title}</Text>
            </Button>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginRight: Spacing.x2,
  },
  image: {
    borderRadius: Rounded.x2,
    width: 150,
    height: 150,
    marginBottom: Spacing.x1,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1.5},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
