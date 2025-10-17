"use client";

import Link from "next/link";

import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ProjectCards({ projects }) {
  return (
    <>
      <article>
        <div className="grid lg:grid-cols-2 place-items-center gap-10 lg:gap-x-56">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="grid place-content-center min-h-full"
              >
                <section className="dark:bg-gamboge dark:text-afwhite text-dpurple border-black shadow-lg shadow-black rounded-md p-6 w-72 h-56 flex flex-col justify-between">
                  <div>
                    <h3 className="text-center text-sm font-semibold">
                      {project.title}
                    </h3>
                    <div className="grid grid-flow-col place-items-center">
                      <div className="grid grid-cols-1">
                        <p className="overflow-hidden text-ellipsis line-clamp-3 text-center text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-row justify-center gap-4 p-2">
                          {project.stack.map((item) => (
                            <i
                              key={item}
                              className={`devicon-${item}-plain colored text-2xl`}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-6 place-content-center">
                    {project.link && (
                      <div className="flex flex-col justify-center items-center gap-2">
                        <p className="bg-gradient-to-t from-blue-gray to-transparent bg-[length:100%_0.3em] bg-no-repeat bg-bottom">
                          App
                        </p>
                        <Link href={project.link} target="_blank">
                          <LinkIcon
                            title="Link"
                            className="size-6 hover:scale-110 hover:drop-shadow-lg"
                          />
                        </Link>
                      </div>
                    )}

                    {project.repo && (
                      <div className="flex flex-col justify-center items-center gap-2">
                        <p className="bg-gradient-to-t from-blue-gray to-transparent bg-[length:100%_0.3em] bg-no-repeat bg-bottom">
                          Repo
                        </p>
                        <Link href={project.repo} target="_blank">
                          <CodeBracketIcon
                            title="Repo"
                            className="size-6 hover:scale-110 hover:drop-shadow-lg"
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}
