import {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import {IPost} from 'types';

const usePosts = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        (snapshot) => {
          const posts: IPost[] | any = [];

          snapshot.forEach((doc) => {
            posts.push({...doc.data(), id: doc.id});
          });
          setLoading(false);
          setPosts(posts);
        },
        (err: any) => setError(err),
      );

    return () => unsubscribe();
  }, []);

  return {
    error,
    loading,
    posts,
  };
};

export default usePosts;
