import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export async function fetchBooks() {
  const res = await axios.get(`${API_URL}/books/`);
  return res.data;
}

export async function getFurigana(text: string) {
  const res = await axios.post(`${API_URL}/furigana/`, { text });
  return res.data;
}

export async function exportAnki(data: any) {
  const res = await axios.post(`${API_URL}/anki/`, data);
  return res.data;
}