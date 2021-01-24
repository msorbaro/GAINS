
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1SjvERqqPvWj0fFmSmzlVFKPHDhx8Bag",
  authDomain: "gains-class.firebaseapp.com",
  projectId: "gains-class",
  storageBucket: "gains-class.appspot.com",
  messagingSenderId: "314784494356",
  appId: "1:314784494356:web:957bf074ba2bccf554c801",
  measurementId: "G-ZEREW3LMVZ"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export function addNote(note){
  database.ref('Notes/').push(note);
}

export function getNotes(callback){
  database.ref('Notes').on('value', (snapshot)=>{
    const allNotes = snapshot.val();
    callback(allNotes)
  })
}

export function removeNote(noteID) {
  database.ref('Notes/' + noteID).remove()
}
