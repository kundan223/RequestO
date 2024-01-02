import React from "react";
import circle from "../asssets/circle.png";
import circle2 from "../asssets/circle2.png";
import background from "../asssets/background.png";
import "./lobby.css";
const Lobby = () => {
  

  return (
    <div className="bg-black bg-opacity-5 box text-white h-[800px] w-[700px] mx-auto my-20 shadow-md rounded-lg  ">
      <div className=""></div>

      <table className="table-fixed w-full">
        <thead>
          <tr className="h-[60px] text-left text-[1.3em]">
            <th className="w-20 pl-4 font-thin">
              <img src={circle2} className="h-9 pl-1" alt="circle"></img>
            </th>
            <th className="w-5/12 pl-4 font-thin">User</th>
            <th className="w-5/12 pl-4 font-thin">Service Required</th>
            <th className="w-5/12 pl-4 font-thin">Status</th>
          </tr>

        </thead>
        <tbody>
          {/* Existing rows */}
          <tr className="border-b bg-black bg-opacity-10 h-[20px] text-left  border-white border-opacity-20 hover:bg-[#FF5733] hover:bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px] " alt="Logo" /></td>
            <td className="w-1/4 pl-4">John Doe</td>
            <td className="w-1/4 pl-4">Web Development</td>
            <td className="w-1/4 pl-4">In Progress</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[30px] text-left  border-white border-opacity-20 hover:bg-[#FF5733] hover:bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">Jane Smith</td>
            <td className="w-1/4 pl-4">Graphic Design</td>
            <td className="w-1/4 pl-4">Completed</td>
          </tr>
          
          {/* Additional rows */}
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left  border-white border-opacity-20 hover:bg-[#FF5733] hover:bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 3</td>
            <td className="w-1/4 pl-4">Service 3</td>
            <td className="w-1/4 pl-4">Status 3</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left  border-white border-opacity-20 hover:bg-[#FF5733] hover:bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 4</td>
            <td className="w-1/4 pl-4">Service 4</td>
            <td className="w-1/4 pl-4">Status 4</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left border-white border-opacity-20 hover.bg-[#FF5733] hover.bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 3</td>
            <td className="w-1/4 pl-4">Service 3</td>
            <td className="w-1/4 pl-4">Status 3</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left border-white border-opacity-20 hover.bg-[#FF5733] hover.bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 4</td>
            <td className="w-1/4 pl-4">Service 4</td>
            <td className="w-1/4 pl-4">Status 4</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left border-white border-opacity-20 hover.bg-[#FF5733] hover.bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 3</td>
            <td className="w-1/4 pl-4">Service 3</td>
            <td className="w-1/4 pl-4">Status 3</td>
          </tr>
          <tr className="border-b bg-black bg-opacity-10 h-[40px] text-left border-white border-opacity-20 hover.bg-[#FF5733] hover.bg-opacity-60">
            <td className="w-1/6 pl-4"><img src={circle} className="transform  scale-50 h-[40px]" alt="Logo" /></td>
            <td className="w-1/4 pl-4">User 4</td>
            <td className="w-1/4 pl-4">Service 4</td>
            <td className="w-1/4 pl-4">Status 4</td>
          </tr>
          
          {/* ... Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Lobby;
