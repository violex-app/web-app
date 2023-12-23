import { writable } from 'svelte/store';

export const authUser = writable({uid: null, email: null});