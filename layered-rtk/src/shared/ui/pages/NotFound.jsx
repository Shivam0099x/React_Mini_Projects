import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent select-none">
          404
        </h1>

        {/* Icon */}
        <div className="text-5xl mb-4 animate-bounce">🔍</div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg border border-blue-200 text-blue-700 font-semibold bg-white hover:bg-blue-50 active:scale-[0.98] transition"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
    </div>
  );
};

export default NotFound;