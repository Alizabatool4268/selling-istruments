import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 p-12 ">
      < hr className="w-[100%]"/>
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
       <div>
          <h6 className="text-lg text-blue-400">About Us</h6>
          <p className="text-sm">we bring the joy of music to your fingertips! Whether you are a beginner discovering your passion or a professional musician perfecting your craft, our store offers
             a wide range of high-quality musical instruments to suit every need.</p>
       </div>
       <div>
       <h6 className="text-lg text-blue-400">Contact Us</h6>
       <p className="text-sm ml-2">music345@gmail.com contact only when you have issues or bussiness inquires</p>
       </div>
       <div>
       <h6 className="text-lg text-blue-400">Sale</h6>
       <p className='text-sm ml-2'>coupon code= music22 for 22% off! offer valid till December</p>
       </div>
       <div> 
        <h6 className="text-lg text-blue-400">Follow Us</h6>
        <p className="text-sm ml-2">Instagram Twitter Facebook</p>
       </div>
     </div>
      </footer>

  )
}

export default Footer;