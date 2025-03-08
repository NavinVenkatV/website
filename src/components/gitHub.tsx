import { useEffect, useRef } from "react";

const GitHubGraph = ({ username }: { username: string }) => {
    const calendarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadGitHubCalendar = () => {
            if ((window as any).GitHubCalendar && calendarRef.current) {
                (window as any).GitHubCalendar(calendarRef.current, username, { responsive: true });
            }
        };

        if (typeof (window as any).GitHubCalendar !== "undefined") {
            loadGitHubCalendar();
            return;
        }

        // Dynamically load the script
        const script = document.createElement("script");
        script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
        script.async = true;
        script.onload = loadGitHubCalendar;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [username]);

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg w-screen">
            {/* GitHub Calendar CSS */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
            />

            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
                GitHub Contribution Timeline
            </h2>

            <div ref={calendarRef} className="calendar text-gray-700 dark:text-gray-300">
                Loading your contributions...
            </div>
        </div>
    );
};

export default GitHubGraph;
