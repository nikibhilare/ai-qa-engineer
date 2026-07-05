export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Projects",
    "Requirements",
    "AI Test Cases",
    "Test Library",
    "Settings",
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100 border-r p-5">
      <nav>
        {menuItems.map((item) => (
          <div
            key={item}
            className="p-3 rounded-lg hover:bg-blue-100 cursor-pointer mb-2"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}