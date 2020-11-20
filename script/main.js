// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })


    .from(".idea-preparefriend", 0.7, ideaTextTrans)
    .to(".idea-preparefriend", 0.7, ideaTextTransLeave, "+=2")


    .from(
      ".maddie4",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .from(".twelve", 25, {
      opacity: 1,
      y: 30,
      zIndex: "-1"
    })
    .to(".twelve", 1, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })

    .from(
      ".arthur",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=1"
    )
    .to(".arthur", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=15")

    .from(
      ".blue",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".blue", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=7")


    .from(
      ".bowen",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=1"
    )
    .to(".bowen", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".doris",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".doris", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".elysia",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".elysia", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".frank",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".frank", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".gaohaotian",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".gaohaotian", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".gary",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".gary", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")


    .from(
      ".hanying",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".hanying", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".harry",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".harry", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".ian",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".ian", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=18")

    .from(
      ".huitian",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".huitian", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=15")

    .from(
      ".marshall",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".marshall", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=20")

    .from(
      ".miaoge",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".miaoge", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=15")

    .from(
      ".nikki",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 125,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".nikki", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=10")

    .from(
      ".shuhang",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".shuhang", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".toller",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".toller", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".jianchao",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".jianchao", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")


    .from(
      ".yanbai",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".yanbai", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    .from(
      ".yida",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .to(".yida", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=20")

    .from(
      ".zhongyu",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".zhongyu", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")



    .from(
      ".bethany",
      2,
      {
        scale: 0.2,
        opacity: 0,
        x: -25,
        y: 25,
        rotationZ: 90
      },
      "+=2"
    )
    .to(".bethany", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    }, "+=5")

    
    .from(".four2", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn2", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox2 span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn2", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    // .to(
    //   ".four2",
    //   0.5,
    //   {
    //     scale: 0.2,
    //     opacity: 1,
    //     y: -150
    //   },
    //   "+=0.7"
    // )

    // .staggerFrom(".end p", 1, ideaTextTrans, 1.2)
    // .to(
    //   ".last-smile",
    //   0.5,
    //   {
    //     rotation: 90
    //   },
    //   "+=1"
    // );

  // tl.timeScale(2);
  // tl.timeScale(5);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
