import { UsuarioPerfilOrganizacao } from "@models/usuarioperfilorganizacao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Button,
  Card,
  Dialog,
  Portal,
  Snackbar,
  Text,
  TextInput,
  Title,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AuthContext from "../../contexts/AuthContext";

const WIDTH_CARD = 320;

export function Auth({ navigation }: any) {
  const { user, signInApp, getPerfis } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [usuarioPerfilOrganizacao, setUsuarioPerfilOrganizacao] = useState<
    UsuarioPerfilOrganizacao[]
  >([]);
  const formCompleted =
    username && username != "" && password && password != "" ? true : false;

  useEffect(() => {
    if (!user) {
      AsyncStorage.clear();
      setUsername("");
      setPassword("");
      setLoading(false);
    }
  }, [user]);

  async function saveStoragePerfil(perfil: UsuarioPerfilOrganizacao) {
    await AsyncStorage.setItem("@UserPerfil:id", perfil.id.toString());
    await AsyncStorage.setItem("@UserPerfil:orgId", perfil.orgId.toString());
    navigation.navigate("Home");
  }

  const handleSign = () => {
    setLoading(true);
    Keyboard.dismiss();
    if (formCompleted) {
      signInApp(username, password)
        .then(async (response) => {
          await getPerfis(response.token).then((perfis) => {
            if (perfis && perfis.length > 1) {
              setVisibleDialog(true);
              setUsuarioPerfilOrganizacao(perfis);
            } else if (perfis && perfis.length == 1) {
              saveStoragePerfil(perfis[0]);
            }
          });
        })
        .catch((err) => {
          onToggleSnackBar();
          console.log("Erro ao realizar acesso " + err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/img/background.jpg")}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
    >
      <Portal>
        <Dialog
          style={{ padding: 15 }}
          dismissable={false}
          visible={visibleDialog}
          onDismiss={() => setVisibleDialog(false)}
        >
          <View style={styles.titleCard}>
            <Title>Selecione o Perfil desejado:</Title>
          </View>
          <ScrollView>
            <View>
              {usuarioPerfilOrganizacao.map(
                (p: UsuarioPerfilOrganizacao, key: number) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        saveStoragePerfil(p);
                        setVisibleDialog(false);
                      }}
                      key={key}
                      style={styles.buttonOption}
                    >
                      <Text style={{ textAlign: "left" }}>
                        {p.grupo ? p.grupo.nome.concat(" - ") : ""}
                        {p.usuario?.nome}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              )}
            </View>
          </ScrollView>
        </Dialog>
      </Portal>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={styles.containerCardLogo}>
          <Image
            style={{
              resizeMode: "contain",
              height: 100,
              width: 320,
            }}
            source={require("../../assets/img/logo.png")}
          />
        </Card>

        <Card style={styles.containerCardInput}>
          <Card.Content style={styles.contentCardInput}>
            <View style={styles.containerInput}>
              <Icon style={styles.icon} name="account-circle" size={23} />
              <TextInput
                style={styles.input}
                label="E-mail *"
                onChangeText={setUsername}
                value={username}
                theme={{ colors: { background: "transparent" } }}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.containerInput}>
              <Icon style={styles.icon} name="lock" size={23} />
              <TextInput
                style={styles.input}
                label="Senha *"
                onChangeText={setPassword}
                value={password}
                theme={{ colors: { background: "transparent" } }}
                secureTextEntry={true}
                autoCorrect={false}
              />
            </View>
            <Button
              loading={loading}
              disabled={!formCompleted}
              style={[
                { backgroundColor: formCompleted ? "#1e2b32" : "darkgray" },
                styles.button,
              ]}
              mode="contained"
              uppercase={false}
              onPress={handleSign}
            >
              Entrar{loading}
            </Button>
            <TouchableOpacity
              style={{
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
      <View>
        <Snackbar
          style={{ alignSelf: "center", width: 350 }}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "OK",
          }}
        >
          Não foi possível efetuar acesso.
        </Snackbar>
      </View>
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  input: {
    position: "relative",
    height: 50,
    flex: 7,
    fontSize: 14,
  },
  icon: { flex: 1, marginTop: 15, color: "#1e2b32" },
  containerInput: { flexDirection: "row", marginBottom: 10 },
  button: {
    fontSize: 14,
    marginVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 3,

    marginHorizontal: 2,
    alignSelf: "center",
  },
  containerCardLogo: {
    alignItems: "center",
    width: WIDTH_CARD,
    borderRadius: 3,
    marginBottom: 10,
  },
  containerCardInput: {
    width: WIDTH_CARD,
    height: 210,
    borderRadius: 3,
  },
  text: { color: "#1e2b32" },
  contentCardInput: { alignItems: "center", justifyContent: "center", flex: 1 },

  titleCard: {
    alignItems: "flex-start",
  },
  buttonOption: {
    paddingVertical: 5,
    width: "100%",
  },
});
