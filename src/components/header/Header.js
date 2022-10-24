import { useState } from "react";
import "./header.scss";
import Menu from "../menu/Menu";

const Header = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((active) => !active);
  }
  let activeClass = active ? "active" : "";

  return (
    <header>
      <div className="header">
        <div className="top">
          <div className="logo">
            <h1>Georgian Solicitors</h1>
          </div>
          <div className="search" onClick={handleClick}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9812 15.3071C10.6684 17.9604 5.81912 17.7516 2.74814 14.6806C-0.546907 11.3855 -0.546907 6.04319 2.74814 2.74814C6.04319 -0.546907 11.3855 -0.546906 14.6806 2.74814C17.7515 5.81912 17.9604 10.6684 15.3071 13.9812L21.7516 20.4258C22.1177 20.7919 22.1177 21.3855 21.7516 21.7516C21.3855 22.1177 20.7919 22.1177 20.4258 21.7516L13.9812 15.3071ZM4.07397 13.3547C1.51115 10.7919 1.51115 6.63678 4.07397 4.07397C6.63678 1.51115 10.7919 1.51115 13.3547 4.07397C15.9157 6.6349 15.9176 10.7858 13.3604 13.3491C13.3585 13.351 13.3566 13.3528 13.3547 13.3547C13.3528 13.3566 13.351 13.3585 13.3491 13.3604C10.7858 15.9176 6.6349 15.9157 4.07397 13.3547Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={`container ${activeClass}`}>
            <div className={`exit ${!activeClass}`} onClick={handleClick}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.7437 1.49378C10.0854 1.15206 10.0854 0.598015 9.7437 0.256292C9.40197 -0.0854308 8.84793 -0.0854308 8.50621 0.256292L5 3.76251L1.49379 0.256293C1.15207 -0.08543 0.598026 -0.0854304 0.256303 0.256293C-0.0854198 0.598016 -0.0854196 1.15206 0.256303 1.49378L3.76251 4.99999L0.256292 8.50622C-0.0854305 8.84794 -0.0854308 9.40198 0.256292 9.74371C0.598015 10.0854 1.15206 10.0854 1.49378 9.74371L5 6.23748L8.50622 9.74371C8.84794 10.0854 9.40199 10.0854 9.74371 9.74371C10.0854 9.40199 10.0854 8.84794 9.74371 8.50622L6.23749 4.99999L9.7437 1.49378Z"
                  fill="#101010"
                ></path>
              </svg>
            </div>
            <form>
              <input type="text" placeholder="ძებნა" />
            </form>
            <div className="search">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9812 15.3071C10.6684 17.9604 5.81912 17.7516 2.74814 14.6806C-0.546907 11.3855 -0.546907 6.04319 2.74814 2.74814C6.04319 -0.546907 11.3855 -0.546906 14.6806 2.74814C17.7515 5.81912 17.9604 10.6684 15.3071 13.9812L21.7516 20.4258C22.1177 20.7919 22.1177 21.3855 21.7516 21.7516C21.3855 22.1177 20.7919 22.1177 20.4258 21.7516L13.9812 15.3071ZM4.07397 13.3547C1.51115 10.7919 1.51115 6.63678 4.07397 4.07397C6.63678 1.51115 10.7919 1.51115 13.3547 4.07397C15.9157 6.6349 15.9176 10.7858 13.3604 13.3491C13.3585 13.351 13.3566 13.3528 13.3547 13.3547C13.3528 13.3566 13.351 13.3585 13.3491 13.3604C10.7858 15.9176 6.6349 15.9157 4.07397 13.3547Z"
                fill="black"
              />
            </svg>
          </div>
          </div>
        </div>
        <div className="bottom">
          <Menu />
          <div className="lang">
            <span>Eng</span> / <span className="active">Geo</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
