import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  Touchable,
  Image,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import Input from '../input';
import Button from '../button';
import styles from './PostInput.styles';
import {addPost, NowDate} from 'actions';

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

interface Props {
  user: any;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const PostCard: FC<Props> = (props) => {
  const {user, open, setOpen} = props;
  const inputRef = useRef<TextInput>(null!);
  const animatedValue = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [post, setPost] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      inputRef.current.focus();
    } else {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setPost('');
        setLoading(false);
      });
      Keyboard.dismiss();
    }
  }, [open]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.8],
  });

  const addNewPost = () => {
    if (post !== '') {
      setLoading(true);
      addPost({
        post: post,
        timestamp: NowDate(),
        sender: {
          email: user.email,
          profilePhoto: user.profilePhoto,
          uid: user.uid,
        },
      }).then(() => setOpen(false));
    }
  };

  return (
    <View pointerEvents={open ? 'auto' : 'none'} style={styles.root}>
      <AnimatedTouchable
        onPress={() => setOpen(false)}
        style={[styles.overlay, {opacity}]}
      />
      <Animated.View style={[styles.card, {transform: [{translateY}]}]}>
        {user && (
          <Image
            source={{uri: user.profilePhoto}}
            style={styles.profilePhoto}
          />
        )}

        <Input
          ref={inputRef}
          onSubmitEditing={addNewPost}
          maxLength={80}
          value={post}
          onChangeText={(t) => setPost(t)}
          placeholder="Enter the message..."
        />
        <View style={styles.buttons}>
          <Button
            disabled={loading}
            small
            style={styles.cancelButton}
            onPress={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            loading={loading}
            onPress={addNewPost}
            small
            disabled={post === ''}>
            Send
          </Button>
        </View>
      </Animated.View>
    </View>
  );
};

export default PostCard;
