function usersRequist(url) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject("შეცდომა მოხდა");
      });
  });
}

usersRequist()
  .then((response) => {
    console.log(response);
  })
  .catch((reject) => console.log(reject));
