import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/NavBar";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Tours from "../../components/tours/Tours";
import Stories from "../../components/stories/Stories";
import Book from "../../components/book/Book";
import Footer from "../../components/footer/Footer";
import Popup from "../../components/popup/Popup";
import Contact from "../../components/contact/Contact";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Header />

      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
      <Popup />
      <Contact />
    </div>
  );
};

export default Home;
