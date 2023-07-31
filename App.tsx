import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import user from './user.json';
import S3Image from './components/S3Image';
import SmartImage from "./components/SmartImage";


const Image = SmartImage;

const Header = () => (
  <>
    <Image height={300} imgKey={user.backgroundImage} style={styles.backgroundImage} />
    <View style={styles.headerContent}>
      <Image width={100} imgKey={user.image} style={styles.avatar} />

      <Text>{user.bio}</Text>

      <View style={styles.followers}>
        {user.followedBy.map((follower, index) => (
          <Image
            key={index}
            imgKey={follower.image}
            style={styles.followerImage}
            height={35}
            width={35}
          />
        ))}
      </View>
    </View>

    <StatusBar style="light" />
  </>
);

export default function App() {
  return (
    <FlatList
      data={user.posts}
      numColumns={3}
      ListHeaderComponent={Header}
      contentContainerStyle={{ gap: 1 }}
      columnWrapperStyle={{ gap: 1 }}
      renderItem={({ item }) => (
        <Image imgKey={item.image} style={styles.postImage} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 150,
    marginBottom: -50,
  },
  headerContent: {
    padding: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,

    marginBottom: 10,
  },

  followers: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  followerImage: {
    width: 35,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: -10,
    borderWidth: 2,
    borderColor: 'white',
  },

  // posts
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postImage: {
    flex: 1,
    maxWidth: '33.4%',
    aspectRatio: 1,
  },
});
