import { TimelineEntry } from "@/lib/timeline";

export default function TimelineCard({
  timeline,
}: {
  timeline: TimelineEntry;
}) {
  return (
    <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">
      <div className="text-sm text-gray-500">{timeline.date}</div>
      <div className="font-semibold text-gray-900 dark:text-white">
        {timeline.heading}
      </div>
      {timeline.description && (
        <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          {timeline.description}
        </div>
      )}
    </li>
  );
}
