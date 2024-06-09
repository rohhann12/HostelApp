// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const firebaseConfig = {
  apiKey: "AIzaSyCa8TWj17jDmkn7p5QGXcLHJyoe1olTJjM",
  authDomain: "hostelapp-ba14d.firebaseapp.com",
  projectId: "hostelapp-ba14d",
  storageBucket: "hostelapp-ba14d.appspot.com",
  messagingSenderId: "606142186000",
  appId: "1:606142186000:web:49531819a5161e38814095",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  webClientId: '606142186000-brtubt6qh2o5fi88u4rkdk1f5acmucp3.apps.googleusercontent.com',
});

export default firebase;
