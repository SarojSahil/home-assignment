import { useAppStore } from "@/app/store/appStore";
import { Navbar } from "@/shared/ui";
import { useParams } from "react-router-dom";

const Subjects = () => {

    const { name } = useParams();
    const { subjects } = useAppStore();
    const solutions = subjects.find(sub => sub.name === name);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
            <main>
                <h1 className="font-bold text-2xl px-4 mb-4">{name}</h1>
                <ul className="px-4 space-y-2">
                    {
                        solutions?.solutions.map(({ id, Answer, question }, index) =>
                            <li key={id} className="bg-slate-700 rounded-md p-4">
                                <div className="mb-4">
                                    Q. {index + 1} ) {question}
                                </div>
                                {Answer}
                            </li>
                        )
                    }
                </ul>
            </main>
        </div>
    );
}

export default Subjects;