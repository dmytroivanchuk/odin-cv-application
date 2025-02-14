import Form from "./components/Form";

export default function App() {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl">CV Generator</h1>
        <h2>Input information below to generate a CV!</h2>
      </div>
      <Form />
    </div>
  );
}
