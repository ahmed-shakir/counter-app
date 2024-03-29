export const getData = (key) => {
	if (!localStorage) return;

	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (err) {
		console.error(`Error getting item ${key} from localStorage`, err);
	}
};

export const storeData = (key, item) => {
	if (!localStorage) return;

	try {
		return localStorage.setItem(key, JSON.stringify(item));
	} catch (err) {
		console.error(`Error storing item ${key} to localStorage`, err);
	}
};

export const deleteData = (key) => {
	if (!localStorage) return;

	try {
		return localStorage.removeItem(key);
	} catch (err) {
		console.error(`Error deleting item ${key} from localStorage`, err);
	}
};
