import BlogsHero from "@/components/BlogsHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       {/* Navbar component */}
       <Navbar />

      {/* Main blog display component */}
      <BlogsHero />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}


 