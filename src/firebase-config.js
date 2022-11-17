/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyC8OSbdFOsAoxWOJILoFmX4XoJRFDH6wTM",
  authDomain: "friendlychat-69ef0.firebaseapp.com",
  projectId: "friendlychat-69ef0",
  storageBucket: "friendlychat-69ef0.appspot.com",
  messagingSenderId: "499104692828",
  appId: "1:499104692828:web:55f99cdf1fb919ea228499"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}