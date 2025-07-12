import { ChangeEvent, FormEvent, useState } from "react";
import api from "../../services/api";
import { Image } from "../Image";

export function Upload() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>('')

  function handleInputFile(event: ChangeEvent<HTMLInputElement>) {
    const fileValue = event.target.files ? event.target.files[0] : null
    if (!fileValue) return
    setFile(fileValue)
  }


  async function handleSubmitFormData(event: FormEvent) {
    event.preventDefault();
    if (!file) return

    // upload
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await api.post('/upload/multipart', formData, {
        headers: {
          "Content-Type": "multpart/form-data"
        }
      });
      setUrl(response.data.url);
    } catch (error) {
      alert('Ocorreu um erro');
      console.error(error);
    }
  }

  return (
    <>
      <Image url={url} />
      <form onSubmit={handleSubmitFormData}>
        <label htmlFor="file">Arquivo:</label>
        <br />
        <input
          type="file"
          id="file"
          onChange={handleInputFile} />
        <br />
        <br />
        <br />
        <button>Enviar Arquivo</button>
      </form>
    </>
  );
}