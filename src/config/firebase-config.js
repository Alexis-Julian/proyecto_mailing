import "dotenv/config";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
	apiKey: "AIzaSyDyE3UD3QxNFP2xnuZJEChlzAaRoz87om4",
	authDomain: "proyecto-email-3fc0f.firebaseapp.com",
	projectId: "proyecto-email-3fc0f",
	storageBucket: "proyecto-email-3fc0f.appspot.com",
	messagingSenderId: "737092560040",
	appId: "1:737092560040:web:e6f1247cc41592baf60e9d",
	measurementId: "G-YZRNX0GPZV",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
