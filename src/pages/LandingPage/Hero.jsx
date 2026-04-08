  import React from "react";
  import { motion } from "framer-motion";
  import { Button } from "@/components/ui/button";
  

  

  export default function Hero() {
    return (
      <section id="home"
        className="relative flex flex-col items-center justify-center h-[100dvh] w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/rajnagar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 z-0 bg-white/60 dark:bg-black/50 " />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto  px-6 md:px-8 mt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img src="/assets/logo.png" alt="Apna Vyapar" className="h-45 w-auto mx-auto" />
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-tight text-gray-900 dark:text-white drop-shadow-lg">
              Aapke Liye Best Location, Best Time, Best Kamai
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              AI-powered recommendations jo street vendors ki daily kamai 30% tak badha de
            </p>
          </motion.div>
          <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <Button size="lg" className="px-8 py-3 text-lg shadow-md" variant="default">
            <a href="/signup">Get Started</a>
            </Button>
            <Button size="lg" className="px-8 py-3 text-lg shadow-md" variant="secondary">
             <a href="/login">Get Started</a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
