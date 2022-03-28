import { writable } from 'svelte/store';
import localProducts from '../localProducts';

const store = writable(flattenProducts([...localProducts]));

// Subscribe
// Set
// Update

function flattenProducts(data){
    return data.map(item=>{
        let image = item.image.url
        return {...item, image}
    })
}

export default store;