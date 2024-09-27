"use client";

import Image from "next/image";
import { technologies, projects } from "@/data";

export default function Home() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-cyan-400">Welcome to the Depths</h1>
                    <p className="text-xl mb-8">Where code meets the ocean floor</p>
                    <div className="inline-flex p-2 bg-blue-950 bg-opacity-50 rounded-full backdrop-blur-md">
                        <Image src="/assets/images/avatar.webp" alt="Developer Avatar"
                               className="rounded-full" width={200} height={200}/>
                    </div>
                </div>
            </section>

            <section id={"about"} className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 bg-opacity-30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">About the Diver</h2>
                    <p className="text-lg mb-6">
                        Greetings, fellow explorer. I am a developer who dives deep into the digital ocean, much like a
                        seasoned
                        Subnautica player explores the alien waters of 4546B. With a rebreather&apos;s efficiency in
                        clean
                        code and a
                        Seamoth&apos;s agility in problem-solving, I craft web applications that withstand the pressure
                        of
                        any depth.
                    </p>
                    <p className="text-lg">
                        My journey has taken me through the shallows of front-end design, the kelp forests of back-end
                        systems,
                        and the abyssal depths of complex algorithms. Each project is a new biome to explore, teeming
                        with
                        challenges to overcome and resources to discover.
                    </p>
                </div>
            </section>

            <section id={"technologies"} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Fabricated Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {technologies.map((tech) => (
                            <div key={tech}
                                 className="flex flex-col items-center p-4 bg-blue-950 bg-opacity-50 rounded-full shadow-lg">
                                <span className="text-sm font-medium text-cyan-400">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id={"projects"} className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 bg-opacity-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Explored Depths</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.name}
                                 className="flex flex-col p-4 bg-blue-900 bg-opacity-50 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mt-4">{project.name}</h3>
                                <p className="text-lg mt-2">{project.description}</p>
                                <a href={project.link} target={"_blank"} className="text-cyan-400 underline mt-4">View
                                    Project</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id={"contact"} className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 bg-opacity-30">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-cyan-400">Send a Beacon</h2>
                    <p className="text-lg mb-8">
                        If you wish to collaborate or simply exchange transmissions, deploy a beacon below. I&apos;ll
                        respond
                        faster than a Peeper fleeing a Stalker.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        <a href={"mailto:bernard.matteo.travail@gmail.com"} target={"_blank"}
                           className="text-blue-200 rounded-lg hover:text-cyan-400 hover:bg-white bg-blue-950 p-4 font-bold">
                            Email
                        </a>
                        <a href={"https://github.com/MatteoBernard"} target={"_blank"}
                           className="text-blue-200 rounded-lg hover:text-cyan-400 hover:bg-white bg-blue-950 p-4 font-bold">
                            Github
                        </a>
                        <a href={"https://www.linkedin.com/in/matt%C3%A9o-bernard-00137a255/"} target={"_blank"}
                           className="text-blue-200 rounded-lg hover:text-cyan-400 hover:bg-white bg-blue-950 p-4 font-bold">
                            LinkedIn
                        </a>
                        <a href={"https://matteobernard.github.io/portfolio"} target={"_blank"}
                           className="text-blue-200 rounded-lg hover:text-cyan-400 hover:bg-white bg-blue-950 p-4 font-bold">
                            Personal Website
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}