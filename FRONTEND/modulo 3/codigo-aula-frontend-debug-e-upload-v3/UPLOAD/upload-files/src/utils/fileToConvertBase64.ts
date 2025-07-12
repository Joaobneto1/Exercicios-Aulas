export function fileToConvertBase64(file: File) {
  const filePromise = new Promise((resolve, reject) => {
    // converteu arquivo
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // devolvendo resolve ou reject
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  return filePromise;
}
