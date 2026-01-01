import axios from "axios";

// Інтерфейс поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Типізація HTTP-запиту
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

// Використання
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
