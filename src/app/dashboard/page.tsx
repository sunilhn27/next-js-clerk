import React from "react";

function DashBoardPage() {
  return (
    <section className="py-12">
      <div className="flex justify-center items-center">
        <div className="border-white-400  border-2 w-[25rem] h-[20rem]">
         <div className="flex flex-col items-center py-6">
          <h1>User Details</h1>
          <div className="flex space-x-4">
           <p>User ID :</p>
           
          </div>

         </div>
        </div>
      </div>
    </section>
  );
}

export default DashBoardPage;
