interface CardProps {
  id: number;
  name: string;
  position: string;
  summary: string;
}
export const Card = ({ id, name, position, summary }: CardProps) => (
  <div className="max-w-xs rounded-lg text-left">
    <div className="w-full h-60 bg-gray-200 flex items-center justify-center mb-6">
      <span className="text-gray-500">Image Placeholder</span>
    </div>

    <p className="large">{name}</p>
    <p className="medium">{position}</p>
    <p className="regular mt-2 min-h-10">{summary}</p>

    <div className="flex justify-start space-x-4 mt-6 text-gray-500">
      <a href="#" className="hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.58 19h-2.92v-10h2.92v10zm-1.46-11.23c-.93 0-1.69-.76-1.69-1.69s.76-1.69 1.69-1.69 1.69.76 1.69 1.69-.76 1.69-1.69 1.69zm13.04 11.23h-2.92v-5.4c0-1.28-.46-2.16-1.63-2.16-.89 0-1.42.6-1.66 1.17-.09.23-.11.56-.11.89v5.5h-2.92s.04-8.92 0-10h2.92v1.42c.39-.6 1.08-1.45 2.63-1.45 1.92 0 3.36 1.25 3.36 3.93v6.1z" />
        </svg>
      </a>
      <a href="#" className="hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.36 6.64a1 1 0 0 0-1.42 0l-4.94 4.94-4.94-4.94a1 1 0 1 0-1.42 1.42l4.94 4.94-4.94 4.94a1 1 0 1 0 1.42 1.42l4.94-4.94 4.94 4.94a1 1 0 1 0 1.42-1.42l-4.94-4.94 4.94-4.94a1 1 0 0 0 0-1.42z" />
        </svg>
      </a>
      <a href="#" className="hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 18c1.31 0 2.55-.31 3.64-.85-.77-1.34-1.62-3.44-2.05-5.65h-3.17c-.42 2.19-1.25 4.28-2.02 5.61 1.09.55 2.33.89 3.6.89zm-3.83-3.89c.55-1.19 1.13-2.74 1.4-4.11h-3.28c.3 1.45.94 2.74 1.88 3.82zm-1.88-5.82h3.28c.28-1.36.86-2.92 1.41-4.1-1.11-.56-2.37-.9-3.69-.9-1.29 0-2.54.33-3.63.88.77 1.34 1.61 3.44 2.05 5.65zm9.65 0c-.3-1.45-.94-2.74-1.88-3.82-.55 1.19-1.13 2.74-1.4 4.11h3.28zm-3.12 2h3.17c.43-2.2 1.25-4.28 2.02-5.61-1.09-.55-2.33-.89-3.6-.89-1.31 0-2.55.31-3.64.85.77 1.34 1.62 3.44 2.05 5.65z" />
        </svg>
      </a>
    </div>
  </div>
);
