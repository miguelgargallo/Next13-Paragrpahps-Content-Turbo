// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "bg-white text-black py-2 px-2 m-2 flex",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Version.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Version = () => {
  return /* @__PURE__ */ jsx2("button", {
    className: "hidden bg-yellow-200 py-2 px-4 text-xs font-bold text-black md:block",
    children: /* @__PURE__ */ jsx2("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v2.0.0"
    })
  });
};

// src/Footer.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs2("footer", {
    className: "bg-black py-8 text-center text-white",
    children: [
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ jsx3("a", {
              href: "https://twitter.com/miguelgargallo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-white",
              children: "Miguel Gargallo"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          children: [
            "2022 \xA9",
            " ",
            /* @__PURE__ */ jsx3("a", {
              href: "https://huggingface.co/spaces/superdatas/LICENSE",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-white",
              children: "Pylar AI creative ML license"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "hidden sm:block",
        children: [
          /* @__PURE__ */ jsxs2("div", {
            className: "flex w-full items-center justify-center",
            children: [
              /* @__PURE__ */ jsx3("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden p-2 md:block",
                children: /* @__PURE__ */ jsx3("picture", {
                  children: /* @__PURE__ */ jsx3("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ jsx3(Version, {}),
              /* @__PURE__ */ jsxs2("div", {
                className: "hidden py-2 px-4 font-bold text-white md:block",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: [
                  " ",
                  /* @__PURE__ */ jsx3("button", {
                    className: "hidden py-2 px-4 font-bold text-white md:block",
                    children: /* @__PURE__ */ jsx3("a", {
                      href: "http://twitter.com/miguelgargallo",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Twitter"
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx3("p", {
            className: "text-white",
            children: "The Art of Prompting, tomorrow, today."
          })
        ]
      })
    ]
  });
};

// src/SubMenu.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var SubMenu = () => {
  return /* @__PURE__ */ jsx4("div", {
    className: "bg-white text-black",
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex flex-row m-2 columns-2 items-center justify-center",
      children: [
        /* @__PURE__ */ jsx4("div", {
          className: "w-full px-16 text-3xl",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/#",
            className: "",
            children: "Pylar"
          })
        }),
        /* @__PURE__ */ jsxs3("div", {
          className: "w-full px-16 text-md",
          children: [
            /* @__PURE__ */ jsx4("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/#",
                className: "",
                children: "Menu Element 1"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/#",
                className: "",
                children: "Menu Element 2"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/#",
                className: "",
                children: "Menu Element 3"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/#",
                className: "",
                children: "Menu Element 4"
              })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ jsx4("a", {
                href: "/#",
                className: "",
                children: "Menu Element 5"
              })
            })
          ]
        })
      ]
    })
  });
};

// src/MainMenu.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var MainMenu = () => {
  return /* @__PURE__ */ jsxs4("div", {
    className: "flex w-full items-center justify-center",
    children: [
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 1"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 2"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-3xl font-bold",
        children: "SuperMenu"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 4"
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 5"
      })
    ]
  });
};
export {
  Button,
  Footer,
  MainMenu,
  SubMenu,
  Version
};
