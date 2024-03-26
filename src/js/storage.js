import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	setDoc,
	getDocs,
	writeBatch,
	serverTimestamp,
	query,
	orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAsVPbuVYgVEQ2t-c7rMrRUmhtwJAlzoYU',
	authDomain: 'todo-cf4c6.firebaseapp.com',
	projectId: 'todo-cf4c6',
	storageBucket: 'todo-cf4c6.appspot.com',
	messagingSenderId: '927491549001',
	appId: '1:927491549001:web:881430b983e1d6fff75c98',
};

export function createStorage(key) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	return {
		key,
		db,
		pull: async function () {
			const querySnapshot = await getDocs(collection(this.db, this.key));
			const todos = [];
			console.log(todos);

			querySnapshot.forEach(doc => {
				todos.push({
					id: doc.id,
					title: doc.data().title,
				});
			});

			return todos;
		},
		push: function (data) {
			const preparedData = JSON.stringify(data);
			localStorage.setItem(this.key, preparedData);
		},
	};
}
