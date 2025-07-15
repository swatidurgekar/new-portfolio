import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
    return (
        <div className="fixed inset-0 bg-gray-800/75 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-10/12">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-purple-50">{project.title}</h2>
                    <button onClick={onClose}
                        className="text-purple-50 hover:text-purple-400 mb-3 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70
                    transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-4 md:w-1/2">
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-gray-300" >{project.fullDescription}</p>
                        <div>
                            <h3 className="font-semibold mb-3 text-primary">Tech stack</h3>
                            <ul className="list-disc list-inside">{project.techStack.map((tech, index) => (
                                <li key={index} className="text-gray-300">{tech}</li>
                            ))}</ul>
                        </div>
                    </div>
                    <div className="relative h-64 w-full md:w-1/2">
                        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
                        <button onClick={onPrev} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70
                        transition-colors -translate-x-[120%] cursor-pointer"><ChevronLeft size={24} /></button>
                        <button onClick={onNext} className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70
                        transition-colors -translate-x-[120%] cursor-pointer"><ChevronRight size={24} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}