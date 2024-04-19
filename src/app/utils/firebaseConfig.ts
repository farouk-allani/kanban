import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    projectId: "kanban-a80ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore and export it
export const db = getFirestore(app);