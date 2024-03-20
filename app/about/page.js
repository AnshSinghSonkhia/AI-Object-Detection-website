import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 no-scrollbar">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-black tracking-tight text-center h-28 gradient-title4 md:text-6xl lg:text-8xl md:px-6">
          About Burglar AI
        </h1>
        <p className="pt-2 text-sm font-bold tracking-tighter text-center md:text-xl gradient-title4">
          It is an Object detection AI Model using Tensorflow to detect burglar
          & raise alarm.
        </p>
        <p className="pt-0.5 text-xs font-bold tracking-tighter text-center md:text-xl gradient-title">
          Developed by Ansh Singh Sonkhia
        </p>
        <div className="my-4">
          <video width="426" height="240" loop autoPlay muted>
            <source src="/animated-Character.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="mt-16 text-3xl font-black tracking-tight text-center h-28 gradient-title4 md:text-6xl lg:text-8xl md:px-6">
          How it works?
        </h1>
      </div>
    </main>
  );
};

export default page;
