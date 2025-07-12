import { ChangeEvent, FormEvent, useState } from "react";
import api from "../../services/api";
import { Image } from "../Image";
import { fileToConvertBase64 } from "../../utils/fileToConvertBase64";

export function UploadBase64() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>('')

  function handleInputFile(event: ChangeEvent<HTMLInputElement>) {
    const fileValue = event.target.files ? event.target.files[0] : null
    if (!fileValue) return
    setFile(fileValue)
  }


  async function handleSubmitBase64(event: FormEvent) {
    event.preventDefault();
    if (!file) return

    // upload
    try {
      const imageBase64 = await fileToConvertBase64(file);

      if (!imageBase64) return;

      const response = await api.post('/upload/base64', {
        image: imageBase64
      });

      setUrl(response.data.url)
    } catch (error) {
      alert('Ocorreu um erro');
      console.error(error);
    }
  }

  return (
    <>
      <h1>Base 64</h1>
      <Image url={url} />
      <form onSubmit={handleSubmitBase64}>
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