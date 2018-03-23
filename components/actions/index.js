import axios from "axios";

export const FETCH_NOTICIAS = "FETCH_NOTICIAS";
export const FETCH_LIKES = "FETCH_LIKES";
export const GIVE_LIKE = "GIVE_LIKE";

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
