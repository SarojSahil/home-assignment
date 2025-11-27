import type { ReactNode } from "react";
import { create } from "zustand";

type Solution = {
    id: number;
    question: string;
    Answer: ReactNode;
}

type Subjects = {
    id: number;
    name: string;
    solutions: Solution[];
}

type AppStore = {
    subjects: Subjects[],
}

export const useAppStore = create<AppStore>(() => ({
    subjects: [
        {
            id: 1001,
            name: "Quantitative Apptitude",
            solutions: [
                {
                    id: 1005,
                    question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                ∵ The train crosses the pole in 9 seconds which is still. <br />
                                ∴ The time to cross the pole will be the length of the train. <br />
                                <br />
                                Given :
                                <ul className="list-disc list-inside">
                                    <li>Speed = 60km/h</li>
                                    <li>Time = 9 seconds</li>
                                </ul>
                                <br />
                                Distance (Length Of The Train) <br />
                                = Speed ⨯ Time <br />
                                = 60 ⨯ 5 / 18 ⨯ 9 <br />
                                = 300 / 18 ⨯ 9 <br />
                                = 2700 / 18 <br />
                                = <span className="bg-slate-200 text-black rounded px-1">150 meters</span>
                            </code>
                        </div>
                },
                {
                    id: 1006,
                    question: "If 15 toys cost Rs. 234, what is cost of 35 toys?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Given :
                                <ul className="list-disc list-inside">
                                    <li>Cost of 15 toys = ₹234</li>
                                </ul>
                                <br />
                                Cost of 1 toy <br />
                                = 243 / 15 <br />
                                = ₹15.6
                                <br /><br />
                                Cost of 35 toys <br />
                                = 35 ⨯ 15.6 <br />
                                = <span className="bg-slate-200 text-black rounded px-1">₹546</span>
                            </code>
                        </div>,
                },
                {
                    id: 1007,
                    question: "A 400m long train is running at 72 Kmph. how much time will it take to cross an electric pole?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Given :
                                <ul className="list-disc list-inside">
                                    <li>Speed = 72km/h</li>
                                    <li>Distance (Length of the train) = 400 meters</li>
                                </ul>
                                <br />
                                Time to cross the electric pole <br />
                                = Distance / Speed <br />
                                = 400 / 72 ⨯ 5 / 18 <br />
                                = 400 / 360 / 18 <br />
                                = 400 ⨯ 18 / 360 <br />
                                = 40 ⨯ 18 / 36 <br />
                                = 720 / 36 <br />
                                = <span className="bg-slate-200 text-black rounded px-1">20 seconds</span>
                            </code>
                        </div>,
                },
                {
                    id: 1008,
                    question: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Given :
                                <ul className="list-disc list-inside">
                                    <li>Time = 5 miutes = 300 seconds</li>
                                    <li>Distance (Length of the street) = 600 meters</li>
                                </ul>
                                <br />
                                Person's Speed <br />
                                = Distance / Time <br />
                                = 600 / 300 <br />
                                = 2 m/s <br />
                                = 2 ⨯ 18 / 5 <br />
                                = <span className="bg-slate-200 text-black rounded px-1">7.2 km/h</span>
                            </code>
                        </div>,
                },
                {
                    id: 1009,
                    question: "Time is taken by two trains running in opposite directions to cross a man standing on the platform in 28 seconds and 18 seconds respectively. It took 26 seconds for the trains to cross each other. What is the ratio of their speeds?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Given :
                                <ul className="list-disc list-inside">
                                    <li>Time taken by train 1 to cross man = 28 seconds</li>
                                    <li>Time taken by train 2 to cross man = 18 seconds</li>
                                    <li>Time taken by both the train so cross each other = 26 seconds</li>
                                </ul>
                                <br />
                                Let speeds of trains are S1 and S2. <br />
                                <br />
                                ∵ Length (Distance) = Speed ⨯ Time <br />
                                Length of train 1 (L1) = (S1 ⨯ 28) <br />
                                Length of train 2 (L2) = (S2 ⨯ 18) <br />
                                <br />
                                ∵ Time to cross each other = relative length / relative speed <br />
                                26 = (L1 + L2) / (S1 + S2) <br />
                                26 = (28 ⨯ S1) + (18 ⨯ S2) / (S1 + S2) <br />
                                26 (S1 + S2) = (28 ⨯ S1) + (18 ⨯ S2) <br />
                                (26 ⨯ S1) + (26 ⨯ S2) = (28 ⨯ S1) + (18 ⨯ S2) <br />
                                (26 ⨯ S2) - (18 ⨯ S2) = (28 ⨯ S1) - (26 ⨯ S1)  <br />
                                (8 ⨯ S2) = (2 ⨯ S1) <br />
                                S1 / S2 = 8 / 2 <br />
                                S1 / S2 = 4 / 1 <br />
                                ∴ S1 : S2 = <span className="bg-slate-200 text-black rounded px-1"> 4 : 1</span>
                            </code>
                        </div>,
                },
                {
                    id: 1010,
                    question: "In a throw of a coin, find the probability of getting a head.",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Let Sample Space be (S) = {"{ H, T }"} <br />
                                Let getting heads be H = {"{ H }"} <br />
                                <br />
                                p(H) = 1 / 2 <br />
                                p(H) = <span className="bg-slate-200 text-black rounded px-1">0.5</span>
                            </code>
                        </div>,
                },
                {
                    id: 1011,
                    question: "Person can swim in water with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, what will be the time taken by the person to go 68 km downstream?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Given:
                                <ul className="list-inside list-disc">
                                    <li>Speed of person in still water = 13km/h</li>
                                    <li>Speed of stream = 4km/h</li>
                                </ul>
                                <br />
                                ∵ Person and water flows in same direction <br />
                                ∴ There relative speed = 13 + 4 = 17km/h <br />
                                <br />
                                Time = Distance / Speed <br />
                                Time = 68 / 17 <br />
                                Time = <span className="bg-slate-200 text-black rounded px-1">4 hours</span>
                            </code>
                        </div>,
                },
                {
                    id: 1012,
                    question: "In a simultaneous throw of two coins, the probability of getting at least one head is:",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                Let sample space be S = {"{( H, T ), ( H , H ), ( T, T ), ( T, H )}"} <br />
                                Let getting at least one heads be H = {"{( H, T ), ( H , H ), ( T, H )}"} <br />
                                <br />
                                p(H) = 3 / 4 <br />
                                p(H) = <span className="bg-slate-200 text-black rounded px-1">0.75</span>
                            </code>
                        </div>,
                },
            ]
        },
        {
            id: 1002,
            name: "Linux Administration",
            solutions: [
            ]
        },
        {
            id: 1003,
            name: "Advanced Java",
            solutions: [
            ]
        },
        {
            id: 1004,
            name: "E-Commerce Technologies",
            solutions: [
            ]
        }
    ]
}));