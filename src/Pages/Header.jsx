// Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;
  padding: 10px;
  background-color: #919392; /* Add your preferred background color */
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.span`
  font-weight: bold;
  margin-right: 10px; /* Add spacing between profile name and logout button */
`;

const LogoutButton = styled.button`
  background-color: #d3d3d3; /* Light grey color */
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const Header = ({ userEmail, onLogout }) => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <ProfileName>{localStorage.getItem("executive")}</ProfileName>
      </ProfileContainer>
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
