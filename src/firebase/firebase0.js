import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyApSEcVlsvUh8AAvN1j9z1fFJgHooB2bUo",
    authDomain: "expensify-243b4.firebaseapp.com",
    databaseURL: "https://expensify-243b4.firebaseio.com",
    projectId: "expensify-243b4",
    storageBucket: "expensify-243b4.appspot.com",
    messagingSenderId: "852072727808"
  };

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 55990,
//   createdAt: 965483300333
// });


// database.ref('notes/-L34P9MEVrlzz-zoDo56').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fethcing', e);
// });


// setTimeout(() => {
//   database.ref('age').set(31);
// }, 4000);

// setTimeout(() => {
//   database.ref().off('value', onValuechange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(66);
// }, 8000);

// setTimeout(() => {
//   database.ref('age').set(77);
// }, 10500);


  // database.ref('location')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val()
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });


  // database.ref().set({
  //     name: 'Jorge Cordova',
  //     age: 43,
  //     stressLevel: 6,
  //     job: {
  //       title:'software developer',
  //       company: 'Google'
  //     },
  //     location: {
  //         city: 'Chandler',
  //         country: 'USA'
  //     }   
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed', e);
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // database.ref('isSingle')
  //   .remove()
  //   .then(() => {
  //     console.log("Remove succeeded.")
  //   })
  //   .catch((e) => {
  //     console.log("Remove failed: " + error.message)
  //   });

