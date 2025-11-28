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
            id: 1003,
            name: "Advanced Java",
            solutions: [
                {
                    id: 1013,
                    question: "What are the advantages of Spring Framework?",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                <ol className="list-inside list-decimal">
                                    <li>Spring Framework uses POJOs (Normal java classes) for building application rather than heavy EJB (Enter Java Beans) making the overall application light weight and fast.</li>
                                    <li>It is build on top of existing technologies and libraries like JDBC, ORM, JPA, Hibernate, Logging Frameworks, Servlets, JSP etc.</li>
                                    <li>IOC container is the core of spring framework that handles object creation, dependency injection allowing developers to focus on logic rather than integrating different components manually.</li>
                                    <li>It has better Web Mvc Support for creating web application better than struts.</li>
                                    <li>By design it forces developers to write clean and loose coupled code that is easy to maintain.</li>
                                    <li>spring framework is a set of various modules, where we can include only those we actually need in out application such as Spring core, jdbc, web mvc, security etc.</li>
                                    <li>It allows flexible project configuration using XML, java classes or annotations. We can choose any of these ways to configure the project.</li>
                                    <li>It handles many things internally like creating objects, wiring dependencies, configuations, environments etc reducing a lot of boilerplate code.</li>
                                    <li>It has very large and active community and exellent documentation support.</li>
                                </ol>
                            </code>
                        </div>
                },
                {
                    id: 1014,
                    question: "Explain Generic Servlets Http Servlet and Http Session.",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                <ol className="list-inside list-decimal">
                                    <li><span className="text-black rounded px-1 bg-slate-200">Servlet → GenericServlet → HttpServlet</span></li>
                                    <li><span className="text-black rounded bg-slate-200 px-1">GenericServlet</span> : </li>
                                    <ol className="ml-4 list-inside list-[lower-alpha]">
                                        <li>It is an abstract class that extends Servlet interface and implements init() and destroy() methods.</li>
                                        <li>In order to create servlet using this class we first create a java class and extend this class then implement the service() method only. For rest methods it gives implementations.</li>
                                        <li>This class is independent of protocols and does not have support for HTTP specific features like cookies, query parameters, GET, POST requests, http header, body etc.</li>
                                    </ol>
                                    <li><span className="text-black rounded bg-slate-200 px-1">HttpServlet</span> : </li>
                                    <ol className="ml-4 list-inside list-[lower-alpha]">
                                        <li>It is also an abstract class that extends GenericServlet and implememts service() method.</li>
                                        <li>For creating servlets, we create a java class and extends this class then override methods such as doGet(),doPost() etc. We do no implement service() method here.</li>
                                        <li>This class is specifically designed to work with http protocol.</li>
                                        <li>By implemeting doGet(), doPost() etc we can create methods that respond to http GET, POST etc requests.</li>
                                        <li>It also support Http Headers, query parameters, cookies, sessions, status code, redirects etc which are not there in GenericSevlet.</li>
                                    </ol>
                                    <li><span className="text-black rounded bg-slate-200 px-1">HttpSession</span> : </li>
                                    <ol className="ml-4 list-inside list-[lower-alpha]">
                                        <li>HttpSession is a class that helps the server to remember user info and activities throughout multiple requests.</li>
                                        <li>When the user makes request for the first time it sends a session cookie with some id.</li>
                                        <li>Now in subsequent request the browser automatically adds this cookie to the http request that server uses to know which user is making request.</li>
                                        <li>Often used in cases like login-logout, shopping cart, or anthing that is used accross mupltiple pages.</li>
                                    </ol>
                                </ol>
                            </code>
                        </div>
                },
                {
                    id: 1015,
                    question: "Write steps for accessing database using JDBC api.",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                <ol className="list-inside list-decimal">
                                    <li>JDBC stands for java database connectivity.</li>
                                    <li>It is a Java API for connecting a java application with a relational database like mysql, postgresql, mssql server etc.</li>
                                    <li>It consists of following steps:</li>
                                    <ol className="list-inside list-[lower-alpha] ml-4" >
                                        <li>Create a java program and download jdbc driver as per the databasee.</li>
                                        <li>First load the jdbc driver using <span className="bg-slate-200 text-black rounded px-1">Class.forName("com.mysql.cj.jdbc.Driver")</span></li>
                                        <li>Create connection using database url, username and password <span className="bg-slate-200 text-black rounded px-1">Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/database_name", "user", "password")</span></li>
                                        <li>Create an SQL statement:</li>
                                        <ul className="list-inside list-disc ml-4">
                                            <li><span className="rounded text-black bg-slate-200 px-1">Statement</span> : used when executing queries without any parameters such as DDL queries.</li>
                                            <li><span className="rounded text-black bg-slate-200 px-1">PreparedStatement</span> : used when executing queries with dynamic values such as DML queries.</li>
                                            <li><span className="rounded text-black bg-slate-200 px-1">CallableStatement</span> : used for invoking stored procedures.</li>
                                            <li>eg. <span className="rounded text-black bg-slate-200 px-1">Statement stmt = connection.createStatement("SELECT * FROM Employees")</span></li>
                                        </ul>
                                        <li>Execute the statement:</li>
                                        <ul className="list-inside list-disc ml-4">
                                            <li><span className="text-black px-1 bg-slate-200 rounded">executeQuery()</span> : used when querying data.</li>
                                            <li><span className="text-black px-1 bg-slate-200 rounded">executeUpdate()</span> : used when updating, inserting or deleting data.</li>
                                        </ul>
                                        <li>Process the ResultSet returned by the query.</li>
                                        <ul className="list-inside list-disc ml-4">
                                            <li><span className="text-black px-1 bg-slate-200 rounded">ResultSet.next()</span> : can be used to go to next record.</li>
                                            <li><span className="text-black px-1 bg-slate-200 rounded">ResultSet.getInt("column name"), ResultSet.getString("column name")</span> : can be used to get values of current record.</li>
                                        </ul>
                                        <li>Then <span className="text-black px-1 rounded bg-slate-200">commit()</span> or <span className="text-black px-1 rounded bg-slate-200">rollback()</span> the query if want.</li>
                                        <li>Finally close the ResultSet, Statement and Connection to free memory and release database connection.</li>
                                    </ol>
                                </ol>
                            </code>
                        </div>
                },
                {
                    id: 1016,
                    question: "What is JSP? Explain JSP directives.",
                    Answer:
                        <div className="pl-4 bg-slate-600 rounded-md">
                            <code>
                                <ol className="list-inside list-decimal">
                                    <li>JSP stands for Java Server Pages.</li>
                                    <li>Main goal of JSP is to allow writting HTML and Java code together in a single file.</li>
                                    <li>Servlet and JSP have same capabilities the only difference is that they allow creating dynamic html pages easier than a servlet.</li>
                                    <li>JSP is also compiled to a sevlet when it runs for the first time.</li>
                                    <li>JSP runs on the server executes java code inside it and final output is sent to the client not the original code file.</li>
                                    <li>JSP uses speacial tags to embbed java code: </li>
                                    <ul className="ml-4 list-inline list-disc">
                                        <li><span className="text-black rounded bg-slate-200 px-1">{"<%! %>"}</span>: Declarations are used for declaring variables, classes, methods etc.</li>
                                        <li><span className="text-black rounded bg-slate-200 px-1">{"<% %>"}</span>: Scriptlets are used to write java code.</li>
                                        <li><span className="text-black rounded bg-slate-200 px-1">{"<%= %>"}</span>: Expression are used to write java expressions and output is directly printed in HTML without having to use println().</li>
                                    </ul>
                                    <li><span className="text-black rounded bg-slate-200 px-1">JSP Directives: </span></li>
                                    <ul className="ml-4 list-inline list-disc">
                                        <li><span className="text-black rounded bg-slate-200 px-1">Page</span> : page directives specify how the jsp page should be handled. eg. <span className="text-black rounded bg-slate-200 px-1">{"<%@ page attribute='value' %>"}</span>. Attributes can be import, language, contentType, errorPage etc.</li>
                                        <li><span className="text-black rounded bg-slate-200 px-1">Include</span>: include directives are used to include other html or jsp files in current file. Often used to repetitive UI elements like navbar, footer, sidebar etc. eg. <span className="text-black rounded bg-slate-200 px-1">{"<%@ include file='footer.jsp' %>"}</span>.</li>
                                        <li><span className="text-black rounded bg-slate-200 px-1">Taglib</span>:  taglib directives are used for adding custom tag libraries like JSTL. eg. <span className="text-black rounded bg-slate-200 px-1">{"<%@ taglib uri='' prefix='' %>"}</span></li>
                                    </ul>
                                </ol>
                            </code>
                        </div>
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
            id: 1004,
            name: "E-Commerce Technologies",
            solutions: [
            ]
        }
    ]
}));