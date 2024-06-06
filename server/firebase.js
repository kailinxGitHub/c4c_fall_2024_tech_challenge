import { initializeApp} from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

const uploadData = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "partners"), data);
        console.log("Document written with ID: ", docRef.id);
        return docRef;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const getPartnerNames = async () => {
  const partnerNames = await getDocs(collection(db, "partners"));
  const partnerNamesArray = [];
  partnerNames.forEach((doc) => {
    console.log(doc.id, " => ", doc.data().name);
    partnerNamesArray.push(doc.data().name);
  });
  return partnerNamesArray;
}

const getFirebaseApp = () => {
    return app;
}

export { getFirebaseApp, uploadData, getPartnerNames, db };