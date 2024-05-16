// pages/index.js
import AddCell from "@/app/component/AddCell";
import HomeHeader from "@/app/component/HomeHeader";
import PrivateRoute from "../component/PrivateRoute";


function Page() {
  return (
    <>
      <PrivateRoute>

      <HomeHeader />
      <AddCell />
      </PrivateRoute>
    </>
  );
}



export default Page;
