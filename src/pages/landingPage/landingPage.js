import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/banner";
import SignupForm from "../../components/searchForm";
import DataGrid from "../../components/datagrid";
import Footer from "../../components/footer";
import { fetchCapsules } from "../../store/capsules/capsulesSlice";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <SignupForm />
      <DataGrid />
      <Footer />
    </>
  );
};

export default LandingPage;
