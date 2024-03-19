import Navbar from "@/components/Navbar";
import ObjectDetection from "@/components/ObjectDetection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 no-scrollbar">
        
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-black tracking-tight text-center h-28 gradient-title4 md:text-6xl lg:text-8xl md:px-6">AI Burglar Detector</h1>
        <p className="pt-2 text-sm font-bold tracking-tighter text-center md:text-xl gradient-title4">
          Object detection using AI to detect burglar & raise alarm.
        </p>
        <p className="pt-0.5 text-xs font-bold tracking-tighter text-center md:text-xl gradient-title">
          Developed by Ansh Singh Sonkhia 
        </p>
      </div>
      <div className="flex flex-col items-center">
        <ObjectDetection />
      </div>
    </main>
  );
}
