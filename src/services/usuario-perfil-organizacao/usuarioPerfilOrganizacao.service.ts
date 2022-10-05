import AsyncStorage from "@react-native-async-storage/async-storage";
import { API, BASE_URL } from "@services/api.service";

async function findAllUserPerfils(token:string) {
  const path = "usuarioperfilorganizacao/buscaPerfisUsuario/?isWeb=true";
 return fetch(BASE_URL + path, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer ".concat(token),
    },
  }).then(async (response) => {
    const resultText = await response.text();
    if (resultText) {
      return await JSON.parse(resultText);
    }
    return null;
  })
  .catch((error) => {
    console.error(error);
    throw new Error(
      "Ocorreu um erro ao acessar " + BASE_URL + path + " pelo método GET"
    );
  });
}

export { findAllUserPerfils };
