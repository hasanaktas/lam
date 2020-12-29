import React, {useState, FC} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Button, Layout} from 'components';
import {uploadProfilePhoto, createUser} from 'actions';
import {useSession} from 'hooks';
import styles from './SelectProfilePhoto.styles';

const SelectProfilePhotoPage: FC = () => {
  const [user, setUser] = useSession();
  const [myPhoto, setMyPhoto] = React.useState(
    require('assets/icons/selectPhoto.png'),
  );
  const [loading, setLoading] = useState(false);

  const openPicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        path: 'my-file-path.jpg',
        mediaType: 'photo',
        forceJpg: true,
        cropping: true,
        includeBase64: true,
      });
      setMyPhoto({uri: image.path});
      setLoading(true);
      const upload = await uploadProfilePhoto(image.path, user.uid);
      const photoUrl = await upload.ref.getDownloadURL();
      await createUser(user.uid, user.email, photoUrl);
      setLoading(false);

      setUser({
        ...user,
        profilePhoto: photoUrl,
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Layout contentStyle={styles.root}>
      <Text style={styles.title}>Select Profile Photo</Text>
      <TouchableOpacity style={styles.photoButton} onPress={openPicker}>
        <Image source={myPhoto} style={styles.photo} />
      </TouchableOpacity>
      <Button loading={loading} disabled={true} fullWidth>
        LET'S START
      </Button>
    </Layout>
  );
};

export default SelectProfilePhotoPage;
