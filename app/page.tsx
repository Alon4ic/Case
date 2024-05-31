import Image from 'next/image';
import AboutPage from './about/page';
import WorksPage from './works/page';
import SkillsPage from './skills/page';
import ContactsPage from './components/contacts/page';

export default function Home() {
    return (
        <main>
            <AboutPage />
            <WorksPage />
            <SkillsPage />
            <ContactsPage />
        </main>
    );
}
