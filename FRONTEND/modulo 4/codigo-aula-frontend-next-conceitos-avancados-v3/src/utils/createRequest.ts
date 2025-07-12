const baseURL = "http://localhost:3333";
export async function createRequest(url: string, initial: object) {
  const response = await fetch(`${baseURL}${url}`, initial);
  return await response.json();
}
