export default function CreateProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          Create New Project
        </h1>

        <div className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Project Name *
            </label>

            <input
              type="text"
              placeholder="Ex: Banking Application"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Project Description *
            </label>

            <textarea
              rows="4"
              placeholder="Describe your project..."
              className="w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Domain *
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Select Domain</option>
              <option>Banking</option>
              <option>Healthcare</option>
              <option>E-Commerce</option>
              <option>Education</option>
              <option>Insurance</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Testing Type *
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Manual</option>
              <option>Automation</option>
              <option>Both</option>
            </select>
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Create Project
          </button>

        </div>

      </div>
    </main>
  );
}