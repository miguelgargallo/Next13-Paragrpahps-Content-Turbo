"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Footer: () => Footer,
  MainMenu: () => MainMenu,
  SubMenu: () => SubMenu,
  Version: () => Version
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "bg-white text-black py-2 px-2 m-2 flex",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Version.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Version = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", {
    className: "hidden bg-yellow-200 py-2 px-4 text-xs font-bold text-black md:block",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v2.0.0"
    })
  });
};

// src/Footer.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", {
    className: "bg-black py-8 text-center text-white",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", {
          children: [
            "2022 \xA9",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        className: "hidden sm:block",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
            className: "flex w-full items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden p-2 md:block",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Version, {}),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
                className: "hidden py-2 px-4 font-bold text-white md:block",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", {
                    className: "hidden py-2 px-4 font-bold text-white md:block",
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
            className: "text-white",
            children: "The Art of Prompting, tomorrow, today."
          })
        ]
      })
    ]
  });
};

// src/SubMenu.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var SubMenu = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
    className: "bg-white text-black",
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
      className: "flex flex-row m-2 columns-2 items-center justify-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
          className: "w-full px-16 text-3xl",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
            href: "/#",
            className: "",
            children: "Pylar"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
          className: "w-full px-16 text-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/#",
                className: "",
                children: "Menu Element 1"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/#",
                className: "",
                children: "Menu Element 2"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/#",
                className: "",
                children: "Menu Element 3"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                href: "/#",
                className: "",
                children: "Menu Element 4"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "flex w-full items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var MainMenu = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    className: "flex w-full items-center justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 1"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 2"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-3xl font-bold",
        children: "SuperMenu"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 4"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "/#",
        className: "p-4 text-white text-md font-bold",
        children: "Menu Element 5"
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Footer,
  MainMenu,
  SubMenu,
  Version
});
