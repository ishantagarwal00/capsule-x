import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/banner";
import SignupForm from "../../components/searchForm";
import { fetchCapsules } from "../../store/capsules/capsulesSlice";

import axios from "axios";

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
    </>
  );
};

export default LandingPage;
