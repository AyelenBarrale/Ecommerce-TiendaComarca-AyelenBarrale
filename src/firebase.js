import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBiPPheVQ6LWVo8eRMsim-Q2Hsuy96JyTo',
  authDomain: 'ecommerce-comarca-eb529.firebaseapp.com',
  projectId: 'ecommerce-comarca-eb529',
  storageBucket: 'ecommerce-comarca-eb529.appspot.com',
  messagingSenderId: '910629097550',
  appId: '1:910629097550:web:f33f187f2fad60f019b31f',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

