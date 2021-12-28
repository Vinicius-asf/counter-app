(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyC7_3k5SDz9zKla29_gI6bvshO7XKHnU5M",
        authDomain: "counter-app-bdb24.firebaseapp.com",
        databaseURL: "https://counter-app-bdb24-default-rtdb.firebaseio.com",
        projectId: "counter-app-bdb24",
        storageBucket: "counter-app-bdb24.appspot.com",
        messagingSenderId: "906975830545",
        appId: "1:906975830545:web:8da640827c85a049f847b0",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    let counters = database.ref("counters/");
    counters.on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
})();
