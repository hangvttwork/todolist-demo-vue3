import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXwsU0Uv9z9r0_4Pq-WCDXNzB9SswE5J4",
    authDomain: "todolist-demo-33394.firebaseapp.com",
    projectId: "todolist-demo-33394",
    storageBucket: "todolist-demo-33394.appspot.com",
    messagingSenderId: "637229084860",
    appId: "1:637229084860:web:b75d73a27ed7f8027320b9",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const database = firebaseapp.firestore();
const todolistCollection = database.collection("todolist-demo-db");

export const createNewTodoList = (newTodoList) => {
    return todolistCollection.add(newTodoList);
};

export const fetchAllTodo = async () => {
    let data = [];
    todolistCollection.onSnapshot(snapshot => {
        data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('--------- all saved todo list: ', data)
    });
}