import React from "react";

const page = () => {
return (
    <main className="flex flex-col items-center min-h-screen p-8 no-scrollbar">
        <div className="flex flex-col items-center">
            <h1 className="h-12 text-4xl font-black tracking-tight text-center sm:text-3xl sm:h-10 md:h-28 gradient-title md:text-6xl lg:text-8xl">
                Ansh Singh Sonkhia
            </h1>
            <p className="pt-2 text-base font-bold tracking-tighter text-center md:text-2xl gradient-title">
                Developer of AI Burglar Detector
            </p>
            <div className="mt-8">
                <img src="https://media.licdn.com/dms/image/D4D03AQGgJjBTUt3UcQ/profile-displayphoto-shrink_800_800/0/1695779978570?e=2147483647&v=beta&t=bh1yjm5XIwe-yEBy_dambDqsz2_lBwR5Iv1F6tQvzPE" alt="Ansh Singh Sonkhia" width="426" height="240" />
            </div>
            <div className="mt-4">
                <a href="https://www.linkedin.com/in/anshsinghsonkhia/" target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 mt-4 font-bold text-black transition-all transform rounded-lg gradient2 hover:gradient4">
                        LinkedIn Profile
                    </button>
                </a>
            </div>
        </div>
    </main>
);
};

export default page;
