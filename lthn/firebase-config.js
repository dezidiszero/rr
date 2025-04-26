// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "MASUKKAN_API_KEY_ANDA",
    authDomain: "NAMA_PROYEK_ANDA.firebaseapp.com",
    databaseURL: "https://NAMA_PROYEK_ANDA.firebaseio.com",
    projectId: "NAMA_PROYEK_ANDA",
    storageBucket: "NAMA_PROYEK_ANDA.appspot.com",
    messagingSenderId: "NOMOR_SENDER_ID_ANDA",
    appId: "ID_APP_ANDA"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
