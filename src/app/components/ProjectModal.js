import Image from "next/image";

export default function ProjectSection({ project, onClose, onNext, onPrev }) {
    return (
        <div>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <h2>{project.title}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}