import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";

const Calendar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/your-github-NavinVenkatV/events"
        );
        const events = await response.json();

        // Process the data to match the required format
        const contributionsMap = new Map();

        events.forEach((event) => {
          const date = event.created_at.split("T")[0];
          contributionsMap.set(date, (contributionsMap.get(date) || 0) + 1);
        });

        const formattedData = Array.from(contributionsMap, ([date, count]) => ({
          date,
          count,
          level: Math.min(4, Math.floor(count / 5)), // Assign levels based on activity
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  return <ActivityCalendar data={data} />;
};

export default Calendar;
