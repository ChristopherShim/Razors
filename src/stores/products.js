import { writable, derived } from "svelte/store";
import url from "../strapi/URL";
import getProducts from "../strapi/getProducts";
const store = writable([], () => {
  setProducts();
  console.log(store)
  return () => {};
});

async function setProducts() {
  let products = await getProducts();
  if (products) {
    products = flattenProducts(products);
    store.set(products);
  }
}

// subscribe
// set
// update

// flatten products
function flattenProducts(data) {
  return data.data.map(item => {
    // let image = item.image.url;
    let image = `${url}${item.attributes.image.data.attributes.url}`;
    let title = `${item.attributes.title}`
    let price = `${item.attributes.price}`
    let description =`${item.attributes.description}`
    return { ...item, image, title, price, description };
  });
}
// featured store
export const featuredStore = derived(store, $featured => {
  return $featured.filter(item => item.attributes.featured === true);
});
export default store;