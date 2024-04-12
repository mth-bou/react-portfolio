import Header from "@/app/[lang]/components/Header";
import Hero from "@/app/[lang]/components/Hero";
import Spacing from "@/app/[lang]/components/Spacing";
import Experiences from "@/app/[lang]/components/Experiences";
import Skills from "@/app/[lang]/components/Skills";
import Stack from "@/app/[lang]/components/Stack";
import Tools from "@/app/[lang]/components/Tools";
import Footer from "@/app/[lang]/components/Footer";
// import Contact from "@/app/_components/Contact";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({params}: any) {
    const {lang} = params;
    const dict = await getDictionary(lang);
    return (
        <main>
            <Header/>
            <Spacing size="md"/>
            <Hero dict={dict} lang={lang} />
            <Spacing size="md"/>
            <Experiences dict={dict} lang={lang} />
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
