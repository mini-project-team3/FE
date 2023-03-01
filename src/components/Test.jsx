import React, { useEffect } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/gsap-core";
import { Back } from "gsap";
import $ from "jquery";

const Test = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".dot").hover(function () {
        var cur = $(this);
        var dest = cur.position().left;
        var t = 0.6;
        TweenMax.to($(".select"), t, { x: dest, ease: Back.easeOut });
      });
      var lastPos = $(".select").position().left;
      function updateScale() {
        var pos = $(".select").position().left;

        var speed = Math.abs(pos - lastPos);
        var d = 44;
        var offset = -20;
        var hd = d / 2;
        var scale = (offset + pos) % d;
        if (scale > hd) {
          scale = hd - (scale - hd);
        }
        scale = 1 - (scale / hd) * 0.35;
        TweenMax.to($(".select"), 0.1, {
          scaleY: scale,
          scaleX: 1 + speed * 0.06,
        });

        lastPos = pos;
        requestAnimationFrame(updateScale);
      }
      requestAnimationFrame(updateScale);
      $(".dot:eq(0)").trigger("mouseover");
    });
  }, []);
  return (
    <PGNStyle>
      <div className="text">
        <h1>Gooey pagination</h1>
        <a href="https://dribbble.com/shots/1676635-Page-scroll-concept">
          Based on a dribbble by Kreativa Studio
        </a>
        . <br />
        Made by <a href="codepen.io/lbebber">Lucas Bebber</a>. <br /> <br />
        Hover on the dots bellow
      </div>
      <ul className="dots">
        <li className="select"></li>
        <li className="dot"></li>
        <li className="dot"></li>
        <li className="dot"></li>
        <li className="dot"></li>
        <li className="dot"></li>
      </ul>
    </PGNStyle>
  );
};

export default Test;

const PGNStyle = styled.div`
  @import "compass/css3";

  .text {
    position: relative;
    left: 110px;
    top: 10px;
    font-family: "Baskerville", Georgia, serif;
    font-size: 17px;
  }
  a {
    color: inherit;
  }
  .dots {
    list-style-type: none;
    background: white;
    /* -webkit-filter: blur(5px) contrast(10); */
    padding: 0;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-left: -10px;
    padding-right: 10px;
    position: relative;
    left: 100px;
    top: 30px;
  }
  .dot {
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background: black;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    color: white;
    position: relative;
    z-index: 2;
  }
  .select {
    display: block;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background: black;
    //opacity:0.6;
    //transition:transform 300ms ease-in-out;
    position: absolute;
    z-index: 3;
    top: 15px;
    left: 0px;
    pointer-events: none;
  }
`;
