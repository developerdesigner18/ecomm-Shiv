import React from "react";
import "./CommonNav.css";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import NativeSelect from "@mui/material/NativeSelect";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

function CommonNav() {
  const Navigate = useNavigate();
  return (
    <div className="commonContainer">
      <div className="contentContainer">
        <div className="mailPhoneContainer">
          <div className="hideIcon">
            <MailOutlineIcon sx={{ marginTop: "10px" }} />
          </div>
          <p className="email">test123test@gmai.com</p>
          <div className="hideIcon">
            <PhoneInTalkIcon sx={{ marginTop: "10px" }} />
          </div>
          <p classaName="phone">(12345)67890</p>
        </div>
        <div className="loginOtherContainer">
          <NativeSelect defaultValue={"English"} sx={{ color: "#fff" }}>
            <option value={"English"} className="options">
              English
            </option>
            <option value={"Hindi"} className="options">
              Hindi
            </option>
            <option value={"Gujrati"} className="options">
              Gujarati
            </option>
          </NativeSelect>
          <NativeSelect
            defaultValue={"USD"}
            sx={{ marginLeft: "5px", color: "#fff" }}
          >
            <option value={"USD"} className="options">
              USD
            </option>
            <option value={"Pound"} className="options">
              Pound
            </option>
            <option value={"Rupee"} className="options">
              Rupee
            </option>
          </NativeSelect>
          <div
            className="imgAndTag"
            onClick={() => {
              Navigate("/login");
            }}
          >
            <p>Login</p> <PersonRoundedIcon style={{ marginTop: "10px" }} />
          </div>
          <div className="imgAndTag">
            <p>Wishlist</p> <FavoriteBorderIcon style={{ marginTop: "10px" }} />
          </div>
          <div className="imgAndTag">
            <ShoppingCartOutlinedIcon style={{ marginTop: "10px" }} />
          </div>
        </div>
        <div className="extraIconForResponsive">
          <PersonRoundedIcon
            style={{ marginTop: "10px", color: "#fff" }}
            onClick={() => {
              Navigate("/login");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CommonNav;
