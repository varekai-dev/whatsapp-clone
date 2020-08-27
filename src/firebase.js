import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAqOpXe5GfFPRmCZfuAQ39ro60iZLmbNk8',
  authDomain: 'whatsapp-cloned-1806d.firebaseapp.com',
  databaseURL: 'https://whatsapp-cloned-1806d.firebaseio.com',
  projectId: 'whatsapp-cloned-1806d',
  storageBucket: 'whatsapp-cloned-1806d.appspot.com',
  messagingSenderId: '1039935055459',
  appId: '1:1039935055459:web:8c1f8b1e7a2956ec2a7a56',
  measurementId: 'G-TB42FMPNRK'
}
const fireBaseApp = firebase.initializeApp(firebaseConfig)
const db = fireBaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
