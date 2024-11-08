import 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default CustomActivityIndicator = ({visible}) => {
  return (
    <Portal>
      <Modal visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../images/loading_indicator.png')}
            style={styles.image}
          />
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: hp('15%'),
    height: hp('15%'),
    resizeMode: 'contain',
  },
});
