const useImageURL = (name)=> new URL(`../assets/image/products/${name}`, import.meta.url).href;

export {useImageURL}