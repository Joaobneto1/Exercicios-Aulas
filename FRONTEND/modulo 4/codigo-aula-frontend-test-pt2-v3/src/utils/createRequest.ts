const baseURL = 'http://localhost:3333'
export async function createRequest(url: string, initialValue: object) {
  try {
    const response = await fetch(`${baseURL}${url}`, initialValue)
    return await response.json()
  } catch(error) {
    console.error(error)
  }
}