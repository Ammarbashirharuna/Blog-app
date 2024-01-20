const Navbar  = () => {
    return ( 
    <nav className="d-flex flex items-center justify-around p-6 lg:mt-0">
     <h1 className="text-5xl text-indigo-700 font-bold sm: text-2xl text-orange-700">News Blog</h1>
     <div className="p-5 text-blue-700 font-mono space-x-4 font-bold hover:drop-shadow-lg" >
        <a href="/">Home</a>
        <a href="/create">NewBlog</a>
     </div>
    </nav>
     );
}
 
export default Navbar;