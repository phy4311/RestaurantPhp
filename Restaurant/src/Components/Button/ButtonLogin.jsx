export default function ButtonLogin({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" bg-purple-500 text-back px-16 py-2 text-xl rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
