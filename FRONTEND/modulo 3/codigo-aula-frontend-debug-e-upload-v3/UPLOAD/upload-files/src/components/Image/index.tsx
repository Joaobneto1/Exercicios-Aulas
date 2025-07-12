interface ImageProps {
  url?: string;
}

export function Image({ url }: Readonly<ImageProps>) {
  return (
    <>
      {url && <img src={url} alt="teste" style={{ width: '200px' }} />}
    </>

  );
}