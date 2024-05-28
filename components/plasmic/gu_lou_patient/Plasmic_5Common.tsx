// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: EshJXBjt74tC

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_5Common.module.css"; // plasmic-import: EshJXBjt74tC/css

createPlasmicElementProxy;

export type Plasmic_5Common__VariantMembers = {};
export type Plasmic_5Common__VariantsArgs = {};
type VariantPropType = keyof Plasmic_5Common__VariantsArgs;
export const Plasmic_5Common__VariantProps = new Array<VariantPropType>();

export type Plasmic_5Common__ArgsType = {};
type ArgPropType = keyof Plasmic_5Common__ArgsType;
export const Plasmic_5Common__ArgProps = new Array<ArgPropType>();

export type Plasmic_5Common__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_5CommonProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_5Common__RenderFunc(props: {
  variants: Plasmic_5Common__VariantsArgs;
  args: Plasmic_5Common__ArgsType;
  overrides: Plasmic_5Common__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens,
          sty.root
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox__h51Hx)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cqgo
            )}
          >
            {"\u5217\u8868"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__r7YOe)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__kpiek)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"25%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return $ctx.config.routePrefix + "/";
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
                }
              }}
              src={{
                src: "/plasmic/gu_lou_patient/images/资源162Xpng.png",
                fullWidth: 198,
                fullHeight: 198,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__z9NP
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__xb61X)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__hEbug)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/常见问答2Jpg.jpg",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__hfgdE)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__p3Qm4)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/Persistinhealth";
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToPage"] != null &&
                typeof $steps["goToPage"] === "object" &&
                typeof $steps["goToPage"].then === "function"
              ) {
                $steps["goToPage"] = await $steps["goToPage"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__lQjUa)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hQtLf
                )}
              >
                {"\u575a\u6301\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ru26L)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix + "/Trainingmisconceptions"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToPage"] != null &&
                typeof $steps["goToPage"] === "object" &&
                typeof $steps["goToPage"].then === "function"
              ) {
                $steps["goToPage"] = await $steps["goToPage"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mOxez)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vrW7Z
                )}
              >
                {"\u8bad\u7ec3\u8bef\u533a"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__hFbwA)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo53PainManagement"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/Painmanagement";
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo53PainManagement"] != null &&
                typeof $steps["goTo53PainManagement"] === "object" &&
                typeof $steps["goTo53PainManagement"].then === "function"
              ) {
                $steps["goTo53PainManagement"] = await $steps[
                  "goTo53PainManagement"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__tbaHy)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wkHg3
                )}
              >
                {"\u75bc\u75db\u7ba1\u7406"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__p3Hwn)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo54IceCompress"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/Icecompress";
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo54IceCompress"] != null &&
                typeof $steps["goTo54IceCompress"] === "object" &&
                typeof $steps["goTo54IceCompress"].then === "function"
              ) {
                $steps["goTo54IceCompress"] = await $steps["goTo54IceCompress"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__bzWbD)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dwPAw
                )}
              >
                {"\u8e1d\u626d\u4f24\u5904\u7406"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__vYPxI)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo55AccelerateKneeJointRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix +
                            "/Acceleratekneejointrehabilitation"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo55AccelerateKneeJointRehabilitation"] != null &&
                typeof $steps["goTo55AccelerateKneeJointRehabilitation"] ===
                  "object" &&
                typeof $steps["goTo55AccelerateKneeJointRehabilitation"]
                  .then === "function"
              ) {
                $steps["goTo55AccelerateKneeJointRehabilitation"] =
                  await $steps["goTo55AccelerateKneeJointRehabilitation"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__or2H)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0ZEA
                )}
              >
                {"\u819d\u5173\u8282\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__aJmDy)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo56HemiplegicRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix +
                            "/Hemiplegicrehabilitation"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo56HemiplegicRehabilitation"] != null &&
                typeof $steps["goTo56HemiplegicRehabilitation"] === "object" &&
                typeof $steps["goTo56HemiplegicRehabilitation"].then ===
                  "function"
              ) {
                $steps["goTo56HemiplegicRehabilitation"] = await $steps[
                  "goTo56HemiplegicRehabilitation"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__lyhaB)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h6IsB
                )}
              >
                {"\u504f\u762b\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__cQaLs)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo57CardiacRehabilitation"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix + "/Cardiacrehabilitation"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo57CardiacRehabilitation"] != null &&
                typeof $steps["goTo57CardiacRehabilitation"] === "object" &&
                typeof $steps["goTo57CardiacRehabilitation"].then === "function"
              ) {
                $steps["goTo57CardiacRehabilitation"] = await $steps[
                  "goTo57CardiacRehabilitation"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__cjsN2)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iaoxf
                )}
              >
                {"\u5fc3\u810f\u5eb7\u590d"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__kAqnz)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo58WalkingWithCrutches"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix + "/Walkingwithcrutches"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goTo58WalkingWithCrutches"] != null &&
                typeof $steps["goTo58WalkingWithCrutches"] === "object" &&
                typeof $steps["goTo58WalkingWithCrutches"].then === "function"
              ) {
                $steps["goTo58WalkingWithCrutches"] = await $steps[
                  "goTo58WalkingWithCrutches"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__yoChw)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mkiwz
                )}
              >
                {"\u5e26\u62d0\u6756\u8d70\u8def"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__oacpE)}
          onClick={async event => {
            const $steps = {};

            $steps["goToHome"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return $ctx.config.routePrefix + "/Home";
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToHome"] != null &&
              typeof $steps["goToHome"] === "object" &&
              typeof $steps["goToHome"].then === "function"
            ) {
              $steps["goToHome"] = await $steps["goToHome"];
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ubxxk
            )}
          >
            {"\u8fd4\u56de"}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_5Common__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_5Common__VariantsArgs;
    args?: Plasmic_5Common__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_5Common__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_5Common__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: Plasmic_5Common__ArgProps,
          internalVariantPropNames: Plasmic_5Common__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_5Common__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_5Common";
  } else {
    func.displayName = `Plasmic_5Common.${nodeName}`;
  }
  return func;
}

export const Plasmic_5Common = Object.assign(
  // Top-level Plasmic_5Common renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_5Common
    internalVariantProps: Plasmic_5Common__VariantProps,
    internalArgProps: Plasmic_5Common__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_5Common;
/* prettier-ignore-end */
