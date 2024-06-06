import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

const initializeFireBase = () => {
    try {
        console.log('Firebase Initialized');
        return app;
    } catch (error) {
        console.log('Firebase initialization failed');
        console.error(error);
    }
}

const uploadData = async (data) => {
    // TODO: temp, remove
    const data1 = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    };

    try {
        // TODO: change 
        const docRef = doc(firestore, "partners", "okk");
        let dataUploaded = await setDoc(docRef, data1);
        console.log("Document written with ID: ", docRef.id);
        return dataUploaded;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getFirebaseApp = () => {
    return app;
}

export { initializeFireBase, getFirebaseApp, uploadData, firestore };