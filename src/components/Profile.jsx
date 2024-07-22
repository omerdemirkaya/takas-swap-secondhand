import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./Header";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
    background: linear-gradient(to right, #edffde, #d1e7d5); /* Gradient background */
  font-family: "Arial", sans-serif;

  .profile-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
    max-width: 400px;
    margin: 20px;
  }

  .profile-header {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }

  .profile-details {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
  }

  .profile-details label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
`;

const Profile = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <>
    <Header />
    <ProfileWrapper>
      <div className="profile-card">
        <div className="profile-header">Profil Bilgileri</div>
        <div className="profile-details">
          <label>İsim:</label>
          <p>{user.name}</p>
        </div>
        <div className="profile-details">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
      </div>
    </ProfileWrapper>
    </>);
};

export default Profile;
