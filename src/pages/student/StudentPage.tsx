import React from "react";
import Navbar from "./Nav/Navbar";
import * as S from "./StudentPage.styled";
import Footer from "./Foot/Footer";

const StudentPage = () => {
  return (
    <S.Student>
      <S.Header>
        <Navbar />
      </S.Header>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.Student>
  );
};

export default StudentPage;
