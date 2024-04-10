import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Spacing from "@/app/_components/Spacing";
import Status from "@/app/_components/Status";
import Skills from "@/app/_components/Skills";
import Technos from "@/app/_components/Technos";
import Tools from "@/app/_components/Tools";

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
            <Technos />
            <Spacing size="md" />
            <Tools />
        </main>
    );
}
