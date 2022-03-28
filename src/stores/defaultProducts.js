import { writable } from 'svelte/store';
import localProducts from '../localProducts';

const store = writable([...localProducts]);

// Subscribe
// Set
// Update

export default store;