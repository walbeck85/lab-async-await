// Write your code here!
function displayPosts(posts) {
  const postList = document.querySelector('#post-list');
  posts.forEach(post => {
    const listItem = document.createElement('li');

    const title = document.createElement('h1');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

    listItem.appendChild(title);
    listItem.appendChild(body);
    postList.appendChild(listItem);
  });
}
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts.slice(0, 10)); // Only display first 10 posts
  } catch (error) {
    console.error('Error fetching post data:', error);
    const postList = document.querySelector('#post-list');
    const errorMessage = document.createElement('li');
    errorMessage.textContent = 'Failed to load posts. Please try again later.';
    postList.appendChild(errorMessage);
  }
}
// Wait briefly before starting fetch so test environment loads
window.onload = () => {
  fetchAndDisplayPosts();
};