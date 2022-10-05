import { AuthUser } from "@services/store/model/authUser";

const singIn = async (username: string, password: string) => {
  return fetch("https://corretoramax.com.br/api/login?isWeb=true", {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(async (response) => {
    const jwt = response.headers.get("Authorization");
    if (jwt) {
      const strippedToken = jwt.substr(7, jwt.length - 5);
      const resultText = await response.text();
      const result = await JSON.parse(resultText);
      return { user: result, token: strippedToken };
    } else {
      return {};
    }
  });
};

export { singIn };
