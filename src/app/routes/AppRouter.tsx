import { HomePage } from "@/pages/";
import { Subjects } from "@/pages/subjects";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter basename="/home-assignment/">
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/subjects/:name" element={<Subjects />} />
            </Routes>
        </BrowserRouter>
    );    
}

export default AppRouter;