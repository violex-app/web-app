import { writable } from 'svelte/store';

/**
 * @param {string} key
 * @param {null} defaultValue
 */
function createPersistedStore(key, defaultValue) {
    const store = writable(readFromLocalStorage(key, defaultValue));

    store.subscribe((value) => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    });

    return {
        ...store,
        clear: () => {
            store.set(null);
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(key);
            }
        }
    };
}

// Helper function to read from localStorage
  /**
   * @param {string} key
   * @param {null} defaultValue
   */
  function readFromLocalStorage(key, defaultValue) {
    if (typeof localStorage !== 'undefined') {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
            return JSON.parse(storedValue);
        }
    }
    return defaultValue;
}



const authUser = createPersistedStore('authUser', null);

export { authUser };

