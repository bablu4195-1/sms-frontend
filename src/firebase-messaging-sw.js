importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey:'AIzaSyCY_ct6JFKg_oGwirc7EF8sGMnmJHlPcd8',
    authDomain: "stockmessagesystem.firebaseapp.com",
    projectId: "stockmessagesystem",
    storageBucket: "stockmessagesystem.appspot.com",
    messagingSenderId: '117948972344',
    appId: '1:117948972344:web:a7e0750516d8e749ba15cd',
    measurementId: 'G-1KHVC3FPNE',
    vapidkey:"BORp9krHm9-VqGpKoijpDmn9JoQ5BAg1T-oJMIeI5U_Zp6rgbSqDKxolybwPzN1Q-Kdv1h_q9QgWuAuUU5RbALk"
});

const messaging = firebase.messaging();
