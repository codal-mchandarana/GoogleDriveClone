import Upload from "@/Components/FirstPage/Upload";
import FileUpload from "@/Components/FirstPage/FileUpload";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Upload />
      <FileUpload />
    </main>
  );
}
