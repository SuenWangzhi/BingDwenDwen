let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 70px;
  }
  #bingdwendwen {
      position: relative;
      margin-top: .5rem;
      height: 3.55rem;
      width: 3rem;
  }
  .body {
      border: 0.1rem solid #fafafa;
      box-shadow: 0 0 0 0.01rem #999;
      height: 100%;
      width: 100%;
      position: absolute;
      border-radius: 60% 60% 60% 60% / 50% 50% 60% 60%;
      top: 0;
      left: 0;
      background: #fff;
      z-index:1;
  }
  .ear {
      width: .8rem;
      height: 1.1rem;
      position: absolute;
      top: 0;
      left: .2rem;
      border: 0.1rem solid #f9f9f9;
      box-shadow: 0 0 0 0.01rem #999;
      border-radius: 50% 60% 60% 50% / 50% 50% 50% 50%;
      background: #000;
      z-index: 0;
      transform: rotate(-20deg);
  }
  .right_ear {
      right: .2rem;
      left: auto;
      transform: rotateY(180deg) rotate(-20deg);
  }
  .face {
      width: 2.2rem;
      height: 1.7rem;
      border-radius: 60% 60% 50% 50% / 70% 70% 48% 48%;
      box-shadow: 0 0 0 0.05rem #1c1f00,
          0 0 0 0.09rem #335fe6,
          0 0 0 0.12rem #ee39d3,
          0 0 0 0.14rem #edf466,
          0 0 0 0.16rem #6cf078;
      position: absolute;
      top: .45rem;
      left: .4rem;
      z-index: 1;
  }
  .left_eye {
    position: absolute;
    width: 0.6rem;
    height: .8rem;
    top: 0.8rem;
    left: 0.65rem;
    background: #000;
    z-index: 2;
    border-radius: 50%;
    transform: rotate(45deg);
  }
.left_eye:after,
.right_eye:after {
    position: absolute;
    width: .3rem;
    height: .3rem;
    border: .03rem solid #fff;
    border-radius: 50%;
    content: '';
    top: .1rem;
    left: .15rem;
}
.right_eye:after {
    left: auto;
    right: .15rem;
}
.left_eye:before,
.right_eye:before {
    top: .23rem;
    left: .22rem;
    position: absolute;
    width: .1rem;
    height: .1rem;
    background: #fff;
    border-radius: 50%;
    content: '';
}
.right_eye:before {
    left: 0.22rem;
    top: 0.18rem;
}
.right_eye {
    position: absolute;
    width: 0.6rem;
    height: .8rem;
    top: 0.8rem;
    right: 0.65rem;
    background: #000;
    z-index: 2;
    border-radius: 50%;
    transform: rotate(-45deg);
}
.mouth {
    border: 0.05rem solid #000;
    position: absolute;
    top: 1.3rem;
    width: 1rem;
    height: 0.5rem;
    z-index: 1;
    left: 50%;
    margin-left: -0.5rem;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    border-top: none;
}
.mouth:after,
.mouth:before {
    position: absolute;
    content: '';
    width: .5rem;
    background: #fff;
    height: 0.5rem;
    top: -0.15rem;
    transform: rotate(45deg);
}
.mouth:after {
    left: -0.21rem;
}
.mouth:before {
    right: -0.21rem;
}
.mouth_dot {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.mouth_dot:after,
.mouth_dot:before {
    position: absolute;
    top: .333rem;
    width: 0.05rem;
    height: 0.05rem;
    border-radius: 50%;
    background: #000;
    content: '';
}
.mouth_dot:after {
    left: .113rem;
}
.mouth_dot:before {
    right: .113rem;
}
.nose {
    background: #000;
    width: .3rem;
    height: .3rem;
    position: absolute;
    left: 50%;
    margin-left: -0.15rem;
    top: 1.25rem;
    z-index: 1;
    transform: rotate(50deg) skewY(-10deg);
    border-radius: 30%;
}
.nose:after {
    width: 0.352rem;
    height: 0.36rem;
    position: absolute;
    content: '';
    border-radius: 50%;
    border-top: 0.1rem solid #fff;
    top: -0.07rem;
    transform: rotate(-45deg) skewY(0deg);
    left: -0.017rem;
}
  .hand {
      position: absolute;
      z-index: 0;
      height: 1.4rem;
      width: .57rem;
      background: #000;
      border: 0.09rem solid #f6f6f6;
      box-shadow: 0 0 0 0.01rem #999;
  }
  .left_hand {
      border-radius: 55% 50% 40% 52% / 23% 23% 55% 100%;
      left: -.3rem;
      top: 1.6rem;
      transform: rotate(200deg);
  }
  .right_hand {
      border-radius: 55% 50% 40% 52% / 23% 23% 55% 100%;
      right: -.15rem;
      top: .6rem;
      transform: rotate(27deg);
      transform-origin: left bottom;
      animation: round 1.25s infinite linear;
  }
  .heart:before,
  .heart:after {
      content: "";
      position: absolute;
      width: .12rem;
      height: .2rem;
      background-color: red;
      border-radius: .2rem .2rem 0 0;
      top: 0;
  }
  .heart:before {
      transform: rotate(-45deg);
      left: 0;
  }
  .heart:after {
      transform: rotate(45deg);
      right: .32rem;
  }
  @keyframes round {
      0% {
          transform: rotate(20deg);
      }

      50% {
          transform: rotate(35deg)
      }

      100% {
          transform: rotate(20deg)
      }
  }
  .foot{
    position: absolute;
      background: #000;
      width: .8rem;
      height: 1rem;
      border-radius: 40%;
      border: 0.07rem solid #fff;
      box-shadow: 0 0 0 0.01rem #999;
  }
  .left_foot {
      top: 3rem;
      left: .58rem;
  }
  .left_foot:after {
      position: absolute;
      z-index: 0;
      height: .9rem;
      width: .9rem;
      content: '';
      background: #000;
      top: -0.45rem;
      transform: rotate(12deg);
      left: 0.1rem;
      border-radius: 0 50% 50% 0;
  }
  .right_foot {
      top: 3rem;
      right: .58rem;
  }
  .right_foot:after {
      position: absolute;
      z-index: 0;
      height: .9rem;
      width: .9rem;
      content: '';
      background: #000;
      top: -0.45rem;
      transform: rotate(-12deg);
      right: 0.1rem;
      border-radius: 0 0 0 50%;
  }
  .heart {
      width: .5rem;
      height: .5rem;
      position: absolute;
      top: .1rem;
      right: -0.22rem;
  }
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step(); 
