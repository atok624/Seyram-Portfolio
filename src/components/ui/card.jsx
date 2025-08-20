export function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-semibold text-lg">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-bold mb-1">{children}</h3>;
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}
