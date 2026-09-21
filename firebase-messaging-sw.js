importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAUen6pvOOQTFwZqh6CtI1wWSLAGOWaWHA",
  authDomain: "mercado-pago-21b67.firebaseapp.com",
  projectId: "mercado-pago-21b67",
  storageBucket: "mercado-pago-21b67.firebasestorage.app",
  messagingSenderId: "110809963005",
  appId: "1:110809963005:web:03f7ab7d53d8e67c8d6194"
});

const messaging = firebase.messaging();
