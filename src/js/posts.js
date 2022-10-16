async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = await axios.get(url);
  if (data && data.status === 200) {
    console.log("data: ", data.data);
  }
}
