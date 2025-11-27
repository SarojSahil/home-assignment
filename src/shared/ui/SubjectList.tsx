import { useAppStore } from "@/app/store/appStore";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SubjectList = () => {

    const { subjects } = useAppStore();

    return (
        <ul className="px-4">
            {
                subjects.map(({ name, id }) =>
                    <Link to={`/subjects/${name}`} className="flex font-medium items-center justify-between bg-slate-700 mb-2 p-4 rounded-md" key={id}>
                        {name}
                        <ArrowRightCircle />
                    </Link>
                )
            }
        </ul>
    );
}

export default SubjectList;