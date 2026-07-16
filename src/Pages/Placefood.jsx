import { useState } from "react";

export const SpecificFood=()=> {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button 
        onClick={() => setOpen(!open)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Y
      </button>

      {open && (
        <div className="mt-4 space-y-2 transition-all duration-500">
          <p className="border-b pb-1">Line 1: Hello World!</p>
          <p className="border-b pb-1">Line 2: Tailwind is powerful.</p>
          <p className="border-b pb-1">Line 3: You clicked “Y”.</p>
        </div>
      )}
    </div>
  );
}
