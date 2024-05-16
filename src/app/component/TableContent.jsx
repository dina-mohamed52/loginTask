import jsPDF from "jspdf";
import { useEffect, useState } from "react";

function TableContent({ data, onEdit }) {
  const [newdata, setNewData] = useState([]);
  useEffect(() => {
    setNewData(data);
  }, [data]);

  const handleDelete = (index) => {
    setNewData((prev) => prev.filter((item, idx) => idx !== index));
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Products Table", 80, 10); //adds a text string "Products Table" to the PDF document at coordinates (10, 10)

    let y = 30;

    newdata.forEach((item, i) => {
      doc.text(
        ` (${i + 1})Name => ${item.name}  , Price => ${
          item.price
        }   , Quantity => ${item.quantity}`,
        45, //(45,y) cooredinate of the added text
        y
      );

      y += 15;
    
    });

    doc.save("products.pdf");
  };

  return (
    <div className="mt-[3.4rem] border-t-[1px] border-gray-300">
      <table className="w-full ml-[-4rem] ">
        <thead className="text-[#475467] text-center font-medium font-[rubic]">
          <tr className="h-[1.4rem]"></tr>
          <tr>
            <th className="px-14 py-2">Name</th>
            <th className="px-12 py-2">Price</th>
            <th className="px-12 py-2">Quantity</th>
            <th className="px-8 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* Add an empty row to push the table content to the bottom */}

          {newdata.map((item, index) => (
            <tr key={index}>
              <td className="text-gray-800 px-4 py-2">{item.name}</td>
              <td className="text-gray-800 px-4 py-2">{item.price}</td>
              <td className="text-gray-800 px-4 py-2">{item.quantity}</td>
              <td className="text-gray-800 px-4 py-2 ">
                <div className=" mr-[-5.4rem]   ">
                  <button
                    onClick={() => onEdit(index)}
                    className="w-[3.6rem] h-[2.25rem] rounded-lg text-sky-500 bg-transparent border-2 border-sky-500 mr-2 "
                  >
                    edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="w-[4.75rem] h-[2.25rem] rounded-lg text-white bg-red-400"
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleDownload}
        className="mt-[6rem] ml-[78rem] py-2 px-4 bg-blue-500 text-white rounded-lg focus:outline-none"
      >
        Download
      </button>
    </div>
  );
}

export default TableContent;
