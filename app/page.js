import ObjectDetection from "@/components/ObjectDetection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-black tracking-tight text-center gradient-title md:text-6xl lg:text-8xl md:px-6">Thief Detection AI Alarm</h1>
        <p className="pt-2 text-sm font-bold tracking-tighter text-center md:text-xl gradient-title">
          Object detection using AI to detect thief and raise alarm. Developed by Ansh Singh Sonkhia
        </p>
      </div>
      <div className="flex flex-col items-center">
        <ObjectDetection />
      </div>
    </main>
  );
}
