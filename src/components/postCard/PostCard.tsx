import React, {FC, useState} from 'react';
import {Text, Image, View} from 'react-native';
import {Button} from 'components';
import styles from './PostCard.styles';
import {IPost} from 'types';
import {useSession} from 'hooks';
import {removePost} from 'actions';

const PostCard: FC<IPost> = (props) => {
  const [user] = useSession();
  const {sender, post, id} = props;
  const [loading, setLoading] = useState<boolean>(false);

  const deletePost = () => {
    setLoading(true);
    removePost(id)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.card}>
      <View style={styles.sender}>
        <Image
          source={{uri: sender.profilePhoto}}
          style={styles.profilePhoto}
        />
        <Text numberOfLines={1} style={styles.emailText}>
          {sender.email}
        </Text>
      </View>
      <View>
        <Text numberOfLines={2} style={styles.messageText}>
          {post}
        </Text>
      </View>
      {user?.uid === sender.uid && (
        <View style={styles.buttons}>
          <Button onPress={deletePost} invert small loading={loading}>
            REMOVE
          </Button>
        </View>
      )}
    </View>
  );
};

export default PostCard;
