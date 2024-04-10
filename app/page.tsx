import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Spacing from "@/app/_components/Spacing";
import Status from "@/app/_components/Status";
import Skills from "@/app/_components/Skills";
import Stack from "@/app/_components/Stack";
import Tools from "@/app/_components/Tools";
import Footer from "@/app/_components/Footer";

export default function Home() {
    return (
        <main>
            <Header/>
            <Spacing size="md" />
            <Hero/>
            <Spacing size="md" />
            <Status />
            <Spacing size="md" />
            <Skills />
            <Spacing size="lg" />
            <Stack />
            <Spacing size="md" />
            <Tools />
            <Spacing size="md" />
            <Footer />
        </main>
    );
}
