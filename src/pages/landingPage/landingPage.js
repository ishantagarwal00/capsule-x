import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/banner";
import SignupForm from "../../components/searchForm";
import DataGrid from "../../components/datagrid";
import Footer from "../../components/footer";
import { fetchCapsules } from "../../store/capsules/capsulesSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const capsulesData = useSelector((state) => state.capsules.capsulesData);
  const originalData = useSelector((state) => state.capsules.originalData);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  return (
    <>
      <Banner />
      <SignupForm capsulesData={capsulesData} />
      <DataGrid capsulesData={capsulesData} originalData={originalData} />
      <Footer />
    </>
  );
};

export default LandingPage;
