export default function HomeExpSection() {
    return (
        <div data-theme="cupcake" >
            <div className="flex flex-col container m-auto p-10">
                <span className="text-3xl lg:text-5xl text-center p-10">Experience</span>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">April 2023</time>
                            <div className="text-lg font-black text-secondary">Software Engineer</div>
                            <div className="text-lg font-serif text-primary">VisionIAS</div>
                            At Vision IAS, I am actively contributing to their product development using my skills in optimizing Flutter code. Besides that, I am focused on personal growth, learning how to manage teams more e ectively, and enhancing my communication skills. Additionally, I am acquiring proficiency in using Jira for software development, which allows for better project management. My dedication to continuous learning and improvement ensures that I am making valuable contributions to Vision IAS while honing my abilities in various aspects of software development and team collaboration.
                        </div>
                        <hr />
                    </li>

                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">August 2022</time>
                            <div className="text-lg font-black text-secondary">Full Stack Developer</div>
                            <div className="text-lg font-serif text-primary">Magadh Digital Solutions</div>
                            In my role at Magadh Digital Solutions, I spearheaded Android app development using Flutter and managed e cient teams for both Flutter and Node.js projects. My expertise in Node.js allowed me to handle backend development seamlessly. Additionally, I successfully tackled tasks in React.js. My strong grasp of Socket.IO with Node.js and Flutter further contributed to the company's technological edge.
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">Sept 2020</time>
                            <div className="text-lg font-black text-secondary">Freelancer (FullStack)</div>
                            <div className="text-lg font-serif text-primary">Freelancing</div>
                            During my freelance career from Sept 2020 to Jan 2022, I accomplished diverse projects. I crafted personal Flutter apps, which I hosted on my Play Console ID using Lean App hosting. Additionally, I worked on educational, e-commerce, and static websites utilizing Node.js and Bootstrap, helping clients achieve their online goals e ectively.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    )
}
