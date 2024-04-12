import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Spacing from "@/app/_components/Spacing";
import Experiences from "@/app/_components/Experiences";
import Skills from "@/app/_components/Skills";
import Stack from "@/app/_components/Stack";
import Tools from "@/app/_components/Tools";
import Footer from "@/app/_components/Footer";
// import Contact from "@/app/_components/Contact";

export default function Home() {
    return (
        <main>
            <Header/>
            <Spacing size="md"/>
            <Hero/>
            <Spacing size="md"/>
            <Experiences/>
            <Spacing size="md"/>
            <Skills/>
            <Spacing size="md"/>
            <Stack/>
            <Spacing size="md"/>
            <Tools/>
            <Spacing size="md"/>
            {/*<Contact/>
            <Spacing size="md"/>*/}
            <Footer/>
        </main>
    );
}
