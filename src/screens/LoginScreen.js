import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import CustomActivityIndicator from '../components/CustomActivityIndicator';
import CustomButton from '../components/CustomButton';
import Logo from '../components/Logo';
import RootLayout from '../components/RootLayout';
import commonstyles from '../core/styles';
import {checkLoginApi} from '../data/network/ApiImplementation';
import {setLogin} from '../redux/slices/loginSlice';
import {setUser} from '../redux/slices/userSlice';
import {emailValidator} from '../utils/emailValidator';
import {passwordValidator} from '../utils/passwordValidator';
import {showToast} from '../utils/utils';

export default function LoginScreen({route, navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [checked, setChecked] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const onRegisterNowPressed = () => {
    navigation.navigate('Register');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLoginPressed = async () => {
    if (validateLoginData()) {
      checkLoginFromApiAsync();
    }
  };

  //Validate login form details
  const validateLoginData = () => {
    if (isLoading) {
      return false;
    }
    let emailError = '';
    if (!email.value) {
      emailError = "Email or User ID can't be empty";
    }
    if (email.value.includes('@')) {
      emailError = emailValidator(email.value);
    }
    const passwordError = passwordValidator(password.value);
    if (emailError !== '') {
      showToast(emailError);
      return false;
    }
    if (passwordError !== '') {
      showToast(passwordError);
      return false;
    }
    return true;
  };

  //Check user login using API
  const checkLoginFromApiAsync = async () => {
    setLoading(true);
    //      const {data, error} = await checkLoginApi(email.value, password.value);

    setLoading(false);
    if (
      email.value == 'darshan.rathod@kanerika.com' &&
      password.value == 'Test@123'
    ) {
      dispatch(setLogin());
      dispatch(
        setUser({
          username: 'darshan.rathod@kanerika.com',
          token: 'data.token',
          roles: 'ADMIN',
        }),
      );
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } else {
      showToast('Incorrect Username or Password');
    }
  };

  return (
    <RootLayout>
      <View style={[commonstyles.container, {alignItems: 'center'}]}>
        <Logo style={{marginTop: hp('5%')}} />
        <Text style={styles.appTitle}>FLIP</Text>
        <View
          style={[
            commonstyles.inputView,
            {width: wp('90%'), marginTop: hp('10%'), marginBottom: hp('3%')},
          ]}>
          <Text style={commonstyles.label}>Email or User ID</Text>
          <TextInput
            accessibilityLabel="tiEmail"
            label="Email"
            style={styles.textInput}
            returnKeyType="next"
            value={email.value}
            error={!!email.error}
            errorText={email.error}
            placeholderTextColor="#777272"
            autoCompleteType="email"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={text => setEmail({value: text, error: ''})}
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />
          <View style={styles.divider} />
        </View>

        <View
          style={[
            commonstyles.inputView,
            {width: wp('90%'), marginBottom: hp('1%')},
          ]}>
          <Text style={commonstyles.label}>Password</Text>
          <View
            style={{
              height: hp('4%'),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              accessibilityLabel="tiPassword"
              ref={passwordRef}
              label="Password"
              returnKeyType="done"
              style={styles.textInput}
              placeholderTextColor="#777272"
              secureTextEntry={passwordVisibility}
              value={password.value}
              error={!!password.error}
              errorText={password.error}
              onChangeText={text => setPassword({value: text, error: ''})}
              onSubmitEditing={onLoginPressed}
            />

            <TouchableWithoutFeedback
              onPress={() => {
                setPasswordVisibility(!passwordVisibility);
              }}>
              <Text style={[styles.passwordToggle, {padding: hp('1%')}]}>
                {passwordVisibility ? 'Show' : 'Hide'}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            color="#777272"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              setChecked(!checked);
            }}>
            <Text style={commonstyles.label}>Remember me</Text>
          </TouchableWithoutFeedback>
        </View>

        <CustomButton
          accessibilityLabel="btnLogin"
          text="Log In"
          style={{width: wp('85%'), marginTop: hp('3%')}}
          onPress={onLoginPressed}
        />

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={onRegisterNowPressed}>
            <Text style={styles.linkText}>Register Now</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onForgotPasswordPressed}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={[styles.linkText, {marginTop: hp('2%')}]}>
            Single Sign On
          </Text>
        </TouchableOpacity>

        <CustomActivityIndicator visible={isLoading} />
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: hp('2.5%'),
    color: '#052b5a',
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: hp('1.5%'),
    width: '100%',
    height: hp('4%'),
    flex: 1,
    color: '#777272',
    padding: 0,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#777272',
  },

  checkboxContainer: {
    width: wp('92%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: hp('1%'),
  },

  passwordToggle: {
    color: '#777272',
    fontSize: hp('1.3%'),
  },

  linkContainer: {
    width: wp('80%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  linkText: {
    fontSize: hp('1.6%'), //13
    color: '#323CA3',
    paddingVertical: hp('1%'),
    textDecorationLine: 'underline',
  },
});
