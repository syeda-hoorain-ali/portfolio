"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden text-foreground">
      {/* 3D Model from Spline */}
      <div className="absolute inset-0 -z-10">
        {/* <Spline scene="https://prod.spline.design/your-spline-scene-url/scene.splinecode" /> */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Text Block */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl uppercase tracking-widest text-accent">Welcome to My Universe</h2>
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I&apos;m <span className="text-primary">Syeda Hoorain Ali</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A full‑stack &amp; agentic AI developer passionate about innovating<br />
            at the intersection of <span className="text-secondary">space tech</span> and <span className="text-accent">robotics</span>.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 transform hover:-translate-y-1 transition"
            >
              Let’s Connect
            </Button>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 transform hover:-translate-y-1 transition"
            >
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Card with Personal Intro */}
        <motion.div
          className="hidden lg:block lg:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Card className="bg-card bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border">
            <CardContent>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-2">Why Choose Me?</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Agentic AI workflows for scalable automation.</li>
                <li>Responsive full‑stack solutions with lasting performance.</li>
                <li>Creative robotics concepts—from design to deployment.</li>
                <li>Committed to continuous learning &amp; space exploration.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
