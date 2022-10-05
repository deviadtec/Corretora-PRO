import { API } from "@services/api.service";
import { FilterAtivoState } from "@services/store/types/filterAtivo.state";

async function getAll(
  pageNumber: number,
  tipoRelatorio: string,
  pageSize: number,
  filterAtivo: FilterAtivoState,
  sortOrder: "asc" | "desc" | "" = "",
  sortKey: string = "id"
) {
  const path =
    "relatorio/?page_size=" +
    pageSize +
    "&page_page=" +
    pageNumber +
    "&tipoRelatorio=" +
    tipoRelatorio +
    "&filtros=&page_sort=" +
    sortKey +
    "," +
    sortOrder +
    "&isWeb=true";

  return API.get(path, {
    filtros: JSON.stringify(filterAtivo),
  });
}

export { getAll };
