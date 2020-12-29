import firebase from 'firebase/app';
import {IPost} from 'types';

export const signIn = async (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signUp = async (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const uploadProfilePhoto = async (uri: string, uid: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return firebase.storage().ref().child(`profile-photos/${uid}`).put(blob);
};

export const createUser = async (
  id: string,
  email: string,
  profilePhoto: string,
) => {
  return firebase.firestore().collection('users').doc(id).set({
    email,
    profilePhoto,
  });
};

export const getProfile = async (uid: string) => {
  return firebase.firestore().collection('users').doc(uid).get();
};

export const addPost = async (post: IPost) => {
  return firebase.firestore().collection('posts').add(post);
};

export const removePost = async (id: string | undefined) => {
  return firebase.firestore().collection('posts').doc(id).delete();
};

export const NowDate = () => {
  return firebase.firestore.Timestamp.fromDate(new Date());
};
