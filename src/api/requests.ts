import axios from "axios";
import { FormData } from "@/types/FormData";

export const BASE_URL = 'https://formspree.io';
export const ENDPOINT = 'f/mwpeqvvy';

export const post = async <T>(path: string, body: T): Promise<{ data: T, status: number, statusText: string }> => {
  const { data, status, statusText } = await axios.post(path, body);
  return { data, status, statusText };
};

export const sendFormData = async (body: FormData): Promise<{ data: FormData, status: number, statusText: string }> => {
  return post<FormData>(`${BASE_URL}/${ENDPOINT}`, body);
};