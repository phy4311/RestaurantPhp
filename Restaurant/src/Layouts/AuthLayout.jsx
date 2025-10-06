export default function AuthLayout({ children, title }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen 
                bg-[url('/asset/backgroup.png')] 
                bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full max-w-md bg-white p-6 rounded shadow bg-gradient-to-r from-pink-400 to-pink-600">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}
