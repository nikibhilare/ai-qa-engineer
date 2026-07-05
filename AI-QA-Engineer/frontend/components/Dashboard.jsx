export default function Dashboard() {
  return (
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold">Welcome back! 👋</h2>

      <p className="text-gray-600 mt-2">
        Ready to create your first AI-powered QA project?
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        + Create New Project
      </button>

      <div className="mt-10 border-2 border-dashed rounded-lg p-10 text-center text-gray-500">
        No projects yet.
        <br />
        Create your first project to get started.
      </div>
    </main>
  );
}