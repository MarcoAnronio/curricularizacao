import { aluno } from "./aluno.js";
import { assistenteSocial } from "./assistenteSocial.js";
import { coordenador } from "./coordenador.js";
import { professor } from "./professor.js";
import { registroPresenca } from "./registroPresença.js";
import { planoIntervencao } from "./planoIntervencao.js";
import { atividade } from "./atividade.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...aluno, ...assistenteSocial, ...coordenador, ...professor, ...registroPresenca, ...planoIntervencao, ...atividade].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
    //Percorre a propriedade path em todas as rotas para verificar padroes de url do parseRoutePath
}))

//sobrescreve o path com o metodo parseRoutePath para verificar os parametros