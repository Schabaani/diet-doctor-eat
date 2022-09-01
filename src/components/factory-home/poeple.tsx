import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {Colors, Rounded, Spacing} from '../../styles';
import {Button} from '../button';
import {SectionHeader} from '../section-header';

interface IPerson {
  title: string;
  subtitle: string;
  image: string;
}

export interface IPeople {
  assets: [IPerson];
  type: 'Meal';
  header: string;
}

export const PeopleSection = (props: IPeople) => {
  return (
    <>
      <SectionHeader header={props.header} />
      <FlatList
        testID={'poeple-flat-list'}
        data={props.assets}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={({item}) => {
          return (
            <>
              <Button>
                <ImageBackground
                  source={{uri: item.image}}
                  style={styles.imageBackground}>
                  <View style={styles.opacity} />
                </ImageBackground>
              </Button>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: 180,
    height: 250,
    borderRadius: Rounded.x2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: Spacing.x3,
    marginRight: Spacing.x3,
  },
  opacity: {
    width: '100%',
    height: '30%',
    backgroundColor: Colors.BLACK,
    opacity: 0.5,
  },
});
