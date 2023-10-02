import add, { cart } from './shoppingCart.js';

const getLastPost = async () => {
  const jsonPlaceholderResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const jsonPlaceholderData = await jsonPlaceholderResponse.json();

  return {
    title: jsonPlaceholderData.at(-1).title,
    body: jsonPlaceholderData.at(-1).body,
  };
};

const lastPost = await getLastPost();
console.log(lastPost);
