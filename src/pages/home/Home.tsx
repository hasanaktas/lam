import React, {FC, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {Layout, PostCard, PostInput} from 'components';
import {usePosts, useSession} from 'hooks';
import {signOut} from 'actions';

const HomePage: FC = () => {
  const {loading, posts} = usePosts();
  const [user] = useSession();
  const [inputOpen, setInputOpen] = useState<boolean>(false);

  return (
    <>
      <Layout
        leftIcon={{
          icon: 'logout',
          onPress: () => signOut(),
          visible: true,
        }}
        rightIcon={{
          icon: 'plus',
          onPress: () => setInputOpen(true),
          visible: true,
        }}>
        {loading && <ActivityIndicator size="large" color="red" />}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({item}) => (
            <PostCard sender={item.sender} post={item.post} id={item.id} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Layout>
      <PostInput
        user={user}
        open={inputOpen}
        setOpen={(val) => setInputOpen(val)}
      />
    </>
  );
};

export default HomePage;
