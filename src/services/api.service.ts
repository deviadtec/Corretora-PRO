import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "https://corretoramax.com.br/api/";

export const API = {
  async getSimple(path: string, headers: HeadersInit_) {
    const token = await AsyncStorage.getItem("@Auth:token");
    const perfilId = await AsyncStorage.getItem("@UserPerfil:id");
    const orgid = await AsyncStorage.getItem("@UserPerfil:orgId");
    if (token && perfilId && orgid) {
      return await fetch(BASE_URL + path, {
        headers: {
          Accept: "application/json",
          PerfilOrgId: orgid,
          PerfilId: perfilId,
          Authorization: "Bearer ".concat(token),
          ...headers,
        },
      })
        .then(async (response) => {
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
    } else {
      console.log(token ? "Nenhum perfil selecionado." : "Não autorizado.");
    }
  },

  async get<T>(path: string, headers: HeadersInit_) {
    const token = await AsyncStorage.getItem("@Auth:token");
    const perfilId = await AsyncStorage.getItem("@UserPerfil:id");
    const orgid = await AsyncStorage.getItem("@UserPerfil:orgId");
    if (token && perfilId && orgid) {
      return await fetch(BASE_URL + path, {
        headers: {
          Accept: "application/json",
          PerfilOrgId: orgid ? orgid : "",
          PerfilId: perfilId ? perfilId : "",
          Authorization: "Bearer ".concat(token),
          ...headers,
        },
      })
        .then(async (response) => {
          const resultText = await response.text();
          const result = await JSON.parse(resultText);
          if (resultText) {
            return {
              data: result.content,
              page: {
                totalElements: result.totalElements,
                totalPages: result.totalPages,
                size: result.pageable ? result.pageable.pageSize : 0,
                number: result.pageable ? result.pageable.pageNumber : 0,
              },
            };
          }
          return null;
        })
        .catch((error) => {
          console.error(error);
          throw new Error(
            "Ocorreu um erro ao acessar " + BASE_URL + path + " pelo método GET"
          );
        });
    } else {
      console.log(token ? "Nenhum perfil selecionado." : "Não autorizado.");
    }
  },

  async post() {
    fetch("https://corretoramax.com.br/api/login?isWeb=true", {
      method: "POST",
      body: JSON.stringify({ username: "corretora", password: "c0rr3t0r4" }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async (response) => {
      const jwt = response.headers.get("Authorization");
      if (!jwt) {
        console.log("Login sem JWT");

        return;
      }
      const strippedToken = jwt.substr(7, jwt.length - 5);
      const resultText = await response.text();
      const result = await JSON.parse(resultText);
    });
  },
};
