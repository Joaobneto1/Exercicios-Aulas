export default async function About() {
  // delay 3s
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <h1>About</h1>
  );
}
