import { FunctionComponent } from "preact";

interface Props {
    targetId: string;
    label: string;
}

const ScrollButton: FunctionComponent<Props> = ({ targetId, label }) => {
    const scrollToTarget = () => {
        const el = document.getElementById(targetId);
        if (el) {
            console.log("Found element:", el);
            (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Element with ID ${targetId} not found.`);
        }
    };

    return (
        <button
            onClick={scrollToTarget}
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-gray-50 hover:text-black transition"
        >
            {label}
        </button>
    );
};

export default ScrollButton;