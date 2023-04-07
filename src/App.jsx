import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div className="bg-gray-100">
 <Header/>
 <main>
   <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
     <div className="px-4 py-6 sm:px-0">
       <h1 className="text-4xl font-bold text-gray-800">
         Welcome to Paschub!
       </h1>
       <p className="mt-4 text-lg text-gray-600">
         Your one-stop destination for study materials.
       </p>
       <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full font-bold">
         Get Started
       </button>
     </div>
   </div>
 </main>
    </div>
  );
}

export default App;