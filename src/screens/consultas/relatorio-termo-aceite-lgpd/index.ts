import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioTermoAceiteLgpd extends BasicEntity {
  cliente: string;
  proposta: string;
  produto: string;
  dataEnvio: Date;
  resposta: string;
  dataResposta: Date;
  corretor: string;
}
