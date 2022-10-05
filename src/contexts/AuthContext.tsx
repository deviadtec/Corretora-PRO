import { UsuarioPerfilOrganizacao } from "@models/usuarioperfilorganizacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "@services/auth";
import { AuthUser } from "@services/store/model/authUser";
import { UsuarioPerfilOrganizacaoService } from "@services/usuario-perfil-organizacao";
import React, { createContext, useContext, useState } from "react";
import { StyleSheet } from "react-native";

interface Response {
  token: string;
  user: AuthUser;
}

interface AuthContextData {
  signed: boolean;
  user: AuthUser | undefined;
  token: string | undefined;
  usuarioPerfilOrganizacao: UsuarioPerfilOrganizacao[] | [];
  signInApp(username: string, password: string): Promise<Response>;
  getPerfis(token: string): Promise<UsuarioPerfilOrganizacao[] | null>;
  onLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthUser | null>();
  const [token, setToken] = useState<string | null>();
  const [usuarioPerfilOrganizacao, setUsuarioPerfilOrganizacao] = useState<
    UsuarioPerfilOrganizacao[] | null
  >([]);

  async function getPerfis(token: string): Promise<UsuarioPerfilOrganizacao[]> {
    const response = await UsuarioPerfilOrganizacaoService.findAllUserPerfils(
      token
    );
    setUsuarioPerfilOrganizacao(response);
    return response;
  }

  async function signInApp(
    username: string,
    password: string
  ): Promise<Response> {
    const response = await AuthService.singIn(username, password);
    if (response.token && response.user) {
      AsyncStorage.setItem("@Auth:user", JSON.stringify(response.user));
      AsyncStorage.setItem("@Auth:token", response.token);
      setUser(response.user);
      setToken(response.token);
      return new Promise((resolve) => {
        resolve({
          token: response.token,
          user: response.user,
        });
      });
    } else {
      throw new Error("Erro ao realizar autenticação");
    }
  }

  async function onLogout() {
    setUser(null);
    setToken(null);
    setUsuarioPerfilOrganizacao(null);
  }
  return (
    <AuthContext.Provider
      value={{
        signed: false,
        user: user!,
        token: token!,
        usuarioPerfilOrganizacao: usuarioPerfilOrganizacao!,
        signInApp,
        getPerfis,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado em um AuthProvider.");
  }

  return context;
}
const styles = StyleSheet.create({
  contentCard: {
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    marginBottom: 5,
    padding: 10,
    width: "100%",
  },
  titleCard: {
    alignItems: "flex-start",
    margin: 10,
  },
  dialogActions: {
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#17a2b8",
    minWidth: 240,
    borderRadius: 3,
    justifyContent: "center",
    marginBottom: 10,
  },
});
export default AuthContext;
