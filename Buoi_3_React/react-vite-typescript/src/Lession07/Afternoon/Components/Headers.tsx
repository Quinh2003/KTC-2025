import { Link } from "react-router";

export default function Headers() {
  return (
    <header className="bg-blue-700 px-8 py-3 flex justify-between items-center text-white font-lato shadow-md">
      <div className="text-3xl font-extrabold tracking-tight">Magazines</div>

      <nav className="flex items-center gap-6 text-sm font-semibold">
        <Link to="/" className="hover:underline"> Home </Link>
        <Link to="/blog" className="hover:underline"> Blog <span className="ml-1">▾</span> </Link>
        <Link to="/category" className="hover:underline"> Category </Link>
        <Link to="/product" className="hover:underline"> Product </Link>
        <Link to="/login" className="hover:underline"> Login </Link>
        <Link to="/customer" className="hover:underline"> Customer </Link>

        <div className="flex items-center justify-center bg-white border-2 border-orange-500 rounded px-3 py-1 space-x-2 w-fit">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
            className="w-5 h-5 object-contain"
          />
          <span className="text-red-500 font-bold text-sm">0</span>
        </div>
      </nav>
    </header>
  );
}
