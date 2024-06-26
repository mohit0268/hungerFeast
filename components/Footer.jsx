const Footer = () => {
    return(
        <footer className="bg-gray-800 text-gray-200 mt-4">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* <!-- Company Information --> */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Company</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Careers</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Press</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Blog</a></li>
        </ul>
      </div>

      {/* <!-- Customer Service --> */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Returns & Refunds</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">Shipping & Delivery</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">FAQs</a></li>
        </ul>
      </div>

     
     

      {/* <!-- Social Media --> */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>
    )
}
export default Footer