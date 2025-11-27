import { Header, SubjectList } from "@/shared/ui";

const HomePage = () => {


    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header />
            <main>
                <h1 className="font-bold text-2xl px-4 mb-4">Home Assignments</h1>
                <SubjectList />
            </main>
        </div>
    );
}

export default HomePage;