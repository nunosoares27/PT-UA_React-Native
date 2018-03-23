import axios from "axios";

export const FETCH_NOTICIAS = "FETCH_NOTICIAS";
export const FETCH_LIKES = "FETCH_LIKES";

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
  }
}
