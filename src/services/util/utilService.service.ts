import { API } from "@services/api.service";

async function autocomplete(path: string, search: string) {
  if (!search) {
    return;
  }
  const pathComplete = path.concat(search).concat("?isWeb=true");
  return API.getSimple(pathComplete, {});
}

async function autocompleteSearch(path: string, search: string) {
  if (!search) {
    return;
  }
  const pathComplete = path.concat(search).concat("&isWeb=true");
  return API.getSimple(pathComplete, {});
}

export { autocomplete, autocompleteSearch };
