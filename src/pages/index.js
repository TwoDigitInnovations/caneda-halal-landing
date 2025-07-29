import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeroSection from "@/components/HeroSection";

export default function Home(props) {
  const router = useRouter();

  return <div className=" w-full min-h-screen">
    <HeroSection />
  </div>;
}
