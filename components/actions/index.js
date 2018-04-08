import axios from "axios";

export const FETCH_NOTICIAS = "FETCH_NOTICIAS";
export const FETCH_LIKES = "FETCH_LIKES";
export const GIVE_LIKE = "GIVE_LIKE";
export const FETCH_COMENTARIOS_NOTICIAS = "FETCH_COMENTARIOS_NOTICIAS";
export const COMENTA_NOTICIA = "COMENTA_NOTICIA";


export function fetchComentarios(id_noticia) {
  let id = id_noticia.id_noticia;
  const request = axios.get(
    `http://ptua.desenvolvimento/api/comentarioNoticia/${id}`
  );
  return {
    type: FETCH_COMENTARIOS_NOTICIAS,
    payload: request
  };
  
}

export function comentaNoticia({ id_noticia, user_id, TextoComentario }) {
  const request = axios.post(
    "http://ptua.desenvolvimento/api/comentarioNoticia",
    {
      id_noticia: id_noticia,
      user_id: user_id,
      TextoComentario: TextoComentario
    }
  );
  return {
    type: COMENTA_NOTICIA,
    payload: request
  };
}

export function fetchNoticias() {
  const request = axios.get("http://ptua.desenvolvimento/api/noticias");
  return {
    type: FETCH_NOTICIAS,
    payload: request
  };
}

export function fetchLikes() {
  const request = axios.get("http://ptua.desenvolvimento/api/likes");
  return {
    type: FETCH_LIKES,
    payload: request
  };
}

export function giveLike({ id_noticia: postid, user_id: id }) {
  const request = axios.post("http://ptua.desenvolvimento/api/likenoticia", {
    id_noticia: postid,
    user_id: id
  });
  return {
    type: GIVE_LIKE,
    payload: request
  };
}
