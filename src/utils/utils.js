import Toast from 'react-native-root-toast';


export function showToast(message) {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM - 40,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: 'black',
    shadowColor: 'black',
    opacity: 0.6,
  });
}
