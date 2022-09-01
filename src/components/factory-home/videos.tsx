import React from 'react';
import {Alert, FlatList, ImageBackground, Text, StyleSheet} from 'react-native';
import {Colors, Rounded, Spacing} from '../../styles';
import {Button} from '../button';
import {SectionHeader} from '../section-header';

interface IVideo {
  duration: string;
  image: string;
  url: string;
  title: string;
}

export interface IVideos {
  assets: [IVideo];
  type: 'Video';
  header: string;
}

export const VideoSecion = (props: IVideos) => {
  return (
    <>
      <SectionHeader header={props.header} />
      <FlatList
        data={props.assets}
        testID={'video-flat-list'}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={({item, index}) => {
          return (
            <Button
              testID={`videosection-item-${index}`}
              style={styles.button}
              onPress={() => {
                Alert.alert(`videosection-item-${index}`);
              }}>
              <ImageBackground
                source={{uri: item.image}}
                style={styles.imageBackground}>
                <Text style={styles.icon}></Text>
                <Text style={styles.duration}>{item.duration}</Text>
              </ImageBackground>
              <Text numberOfLines={1} style={{marginTop: Spacing.x1}}>
                {item.title}
              </Text>
            </Button>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 150,
    borderRadius: Rounded.x2,
    marginRight: Spacing.x2,
  },
  imageBackground: {
    flex: 1,
    borderRadius: Rounded.x2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.x1,
    paddingBottom: Spacing.x1,
  },
  icon: {
    color: Colors.WHITE,
    padding: Spacing.x1 / 2,
    width: 50,
    textAlign: 'center',
    height: 30,
  },
  duration: {
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    padding: Spacing.x1 / 2,
    width: 50,
    textAlign: 'center',
    height: 25,
  },
});
