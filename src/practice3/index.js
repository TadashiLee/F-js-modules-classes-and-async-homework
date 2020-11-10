export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((data) => {
      const { origin, author, content } = data;
      return [origin, author, content];
    });
};
