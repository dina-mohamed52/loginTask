'use client'
import { useState } from "react";
import TableContent from "./TableContent";

function AddCell ()
{
    const [formData, setFormData] = useState({
      name: "",
      price: "",
      quantity: "",
    });
  const [ dataArray, setDataArray ] = useState( [] );
   const [editIndex, setEditIndex] = useState(null);
const [isEditing,setIsEditing]=useState(false)

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

 const handleSubmit = (e) => {
   e.preventDefault();
   if ( isEditing )
   {
     const newDataArray = [...dataArray];
     newDataArray[editIndex] = formData
     setDataArray(newDataArray)
 }
   else
   {
     
     const newDataArray = [ ...dataArray, formData ];
     setDataArray(newDataArray);
    }
   console.log("Form Data:", dataArray);
   // Clear form after submission
   setFormData({
     name: "",
     price: "",
     quantity: "",
   } );
     setEditIndex(null);
     setIsEditing(false);
  };
  const handleEdit = ( index ) =>
  {
     setIsEditing(true)
     setFormData(dataArray[index]);
    setEditIndex( index );
   
   };
  
  return (
    <>
      <div className="mt-8 sm:flex sm:items-center sm:justify-center  sm:gap-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#475467]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your name"
            className="mt-1 p-2 sm:w-[21.5rem] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
          />
        </div>
        <div>
          <label
            htmlFor="Price"
            className="block text-sm font-semibold text-[#475467]"
          >
            Price
          </label>
          <input
            id="Price"
            name="price"
            type="text"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter Price"
            className="mt-1 p-2 sm:w-[21.5rem] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
          />
        </div>
        <div>
          <label
            htmlFor="Quantity"
            className="block text-sm font-semibold text-[#475467]"
          >
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            autoComplete="off"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="mt-1 p-2 sm:w-[21.5rem] w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
          />
        </div>
        <button
          onClick={handleSubmit}
          className=" mt-[1.4rem] focus:outline-none focus:ring-2 focus:ring-sky-200 p-[0.875rem] h-[3rem] rounded-[0.5rem] text-white w-[8rem] bg-[#26B7CD]"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      <TableContent data={dataArray} onEdit={(index) => handleEdit(index)} />
    </>
  );
}

export default AddCell;
