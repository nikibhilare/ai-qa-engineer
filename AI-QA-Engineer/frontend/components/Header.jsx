export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-blue-600">
        AI-QA Engineer
      </h1>

      <div className="flex items-center gap-4">
        <button className="text-2xl">🔔</button>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          N
        </div>
      </div>
    </header>
  );
}