// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { fire_apiKey, fire_appId, fire_authDomain, fire_measurementId, fire_messagingSenderId, fire_projectId, fire_storageBucket } from "../Payment/constant";

const firebaseConfig = {
  apiKey: fire_apiKey,
  authDomain: fire_authDomain,
  projectId: fire_projectId,
  storageBucket: fire_storageBucket,
  messagingSenderId: fire_messagingSenderId,
  appId: fire_appId,
  measurementId: fire_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth(app);