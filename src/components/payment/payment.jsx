import React from "react";

const RazorpayPayment = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject("Failed to load Razorpay SDK");
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (price) => {
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Razorpay SDK failed to load");
  
      const response = await fetch("http://localhost:5000/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: price * 100 }),
      });
  
      const data = await response.json();
  
      if (!data.id) throw new Error("Failed to create Razorpay order");
  
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: price * 100, 
        currency: data.currency,
        name: "Your Company",
        description: `Purchase of ${price === 5000 ? "Basic" : price === 10000 ? "Standard" : "Premium"} Course`,
        order_id: data.id,
        handler: function (paymentResponse) {
          alert(`Payment successful! ID: ${paymentResponse.razorpay_payment_id}`);
          console.log(paymentResponse);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#1a6b3e",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error.message);
      alert(error.message);
    }
  };
  

  return (
    <div className="flex flex-col w-screen sm:h-screen bg-elliptical-gradient px-4 py-4 sm:py-10">
    <div className="text-white text-center flex flex-col justify-center items-center gap-4 mb-8">
      <span className="block text-center max-w-[600px] leading-normal text-3xl sm:text-4xl md:text-5xl font-sans font-bold">
        Simple and Affordable Pricing Plans
      </span>
      <span className="text-sm sm:text-base">
        Start tracking and improving your finance management
      </span>
    </div>
    <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 sm:gap-2 m-5">
      {/* Free Plan */}
      <div className="w-full sm:w-100 max-w-sm p-6 bg-[#212f30] border border-gray-200 rounded-lg shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free</h5>
        <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">0.00</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div className="mb-5">
          <span className="text-white">Great for trying out Finament and for tiny teams</span>
        </div>
        <button
          onClick={() => handlePayment(500)}
          type="button"
          className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Start for free
        </button>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
          </li>
        </ul>
      </div>
      {/* Professional Plan */}
      <div className="w-full sm:w-100 max-w-sm p-6 bg-[#212f30] border border-gray-200 rounded-lg shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Professional</h5>
        <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">98.00</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div className="mb-5">
          <span className="text-white">Best for growing startups and growth companies</span>
        </div>
        <button
          onClick={() => handlePayment(500)}
          type="button"
          className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Sign Up with Professional
        </button>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
          </li>
        </ul>
      </div>
      {/* Enterprise Plan */}
      <div className="w-full sm:w-100 max-w-sm p-6 bg-[#212f30] border border-gray-200 rounded-lg shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Enterprise</h5>
        <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">160.00</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div className="mb-5">
          <span className="text-white">Best for large companies and teams requiring high security</span>
        </div>
        <button
          onClick={() => handlePayment(1000)}
          type="button"
          className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Sign up with Enterprise
        </button>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default RazorpayPayment;
