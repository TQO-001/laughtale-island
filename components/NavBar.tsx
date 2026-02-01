export default function NavBar() {
  return (
    <nav className="p-4 border-b border-gray-800 flex justify-between items-center">
      <div className="font-bold text-xl">LaughTale</div>
      <div className="space-x-4">
        <button className="bg-blue-600 px-4 py-2 rounded">Join Beta</button>
      </div>
    </nav>
  )
}