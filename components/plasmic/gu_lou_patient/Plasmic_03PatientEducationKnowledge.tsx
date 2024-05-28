// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: wJInDymic-jV

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_03PatientEducationKnowledge.module.css"; // plasmic-import: wJInDymic-jV/css

createPlasmicElementProxy;

export type Plasmic_03PatientEducationKnowledge__VariantMembers = {};
export type Plasmic_03PatientEducationKnowledge__VariantsArgs = {};
type VariantPropType = keyof Plasmic_03PatientEducationKnowledge__VariantsArgs;
export const Plasmic_03PatientEducationKnowledge__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_03PatientEducationKnowledge__ArgsType = {};
type ArgPropType = keyof Plasmic_03PatientEducationKnowledge__ArgsType;
export const Plasmic_03PatientEducationKnowledge__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_03PatientEducationKnowledge__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface Default_03PatientEducationKnowledgeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_03PatientEducationKnowledge__RenderFunc(props: {
  variants: Plasmic_03PatientEducationKnowledge__VariantsArgs;
  args: Plasmic_03PatientEducationKnowledge__ArgsType;
  overrides: Plasmic_03PatientEducationKnowledge__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__rtxvl)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zzaio
            )}
          >
            {""}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__cTw92)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__dChHr)}
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
                sty.text___2ZNu8
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___0S3T)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___7Nn4)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/门诊png.png",
              fullWidth: 860,
              fullHeight: 483,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___4ZU)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__ubKYw)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo1TodaysSchedule"] = true
                ? (() => {
                    const actionArgs = { destination: `/TodaysSchedule` };
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
                $steps["goTo1TodaysSchedule"] != null &&
                typeof $steps["goTo1TodaysSchedule"] === "object" &&
                typeof $steps["goTo1TodaysSchedule"].then === "function"
              ) {
                $steps["goTo1TodaysSchedule"] = await $steps[
                  "goTo1TodaysSchedule"
                ];
              }
            }}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox___78Lo7)}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return $ctx.config.routePrefix + "/Schedule";
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
              <div className={classNames(projectcss.all, sty.freeBox__ivw3A)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___8Kbz9)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"40%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/gu_lou_patient/images/资源2Png.png",
                    fullWidth: 501,
                    fullHeight: 501,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___42BXb
                )}
              >
                {"\u4eca\u65e5\u65e5\u7a0b"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ajUBb)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix +
                            "/Nursingknowledgesupplies"
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
            <div className={classNames(projectcss.all, sty.freeBox__kTUb)}>
              <div className={classNames(projectcss.all, sty.freeBox__h4Ja3)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___0Isr1)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"40%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/gu_lou_patient/images/资源1Png.png",
                    fullWidth: 501,
                    fullHeight: 501,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mYkfi
                )}
              >
                {"\u62a4\u7406\u77e5\u8bc6"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__tesou)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix +
                            "/Rehabilitationpatienteducation"
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
            <div className={classNames(projectcss.all, sty.freeBox___2NWdf)}>
              <div className={classNames(projectcss.all, sty.freeBox__qlA3)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__jNuLt)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"40%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/gu_lou_patient/images/康复知识3Png.png",
                    fullWidth: 502,
                    fullHeight: 501,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oy9Du
                )}
              >
                {"\u5eb7\u590d\u77e5\u8bc6"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__s9RSi)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/Medication";
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
            <div className={classNames(projectcss.all, sty.freeBox__nn7Yg)}>
              <div className={classNames(projectcss.all, sty.freeBox__rtqZa)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__a5Fdx)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"40%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/gu_lou_patient/images/医疗知识png.png",
                    fullWidth: 501,
                    fullHeight: 501,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___53T7
                )}
              >
                {"\u533b\u7597\u77e5\u8bc6"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__tVFk)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return $ctx.config.routePrefix + "/Common";
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
            <div className={classNames(projectcss.all, sty.freeBox__yaGd)}>
              <div className={classNames(projectcss.all, sty.freeBox__cCxG)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___7713M)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"40%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/gu_lou_patient/images/问答01Png.png",
                    fullWidth: 501,
                    fullHeight: 501,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g4Hox
                )}
              >
                {"\u5e38\u89c1\u95ee\u7b54"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__rw3MP)}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
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
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__z6Xx7
            )}
          >
            {"\u8fd4\u56de"}
          </div>
        </div>
        <SideEffect
          data-plasmic-name={"sideEffect"}
          data-plasmic-override={overrides.sideEffect}
          className={classNames("__wab_instance", sty.sideEffect)}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_03PatientEducationKnowledge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_03PatientEducationKnowledge__VariantsArgs;
    args?: Plasmic_03PatientEducationKnowledge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    Plasmic_03PatientEducationKnowledge__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      Plasmic_03PatientEducationKnowledge__ArgsType,
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
          internalArgPropNames: Plasmic_03PatientEducationKnowledge__ArgProps,
          internalVariantPropNames:
            Plasmic_03PatientEducationKnowledge__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_03PatientEducationKnowledge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_03PatientEducationKnowledge";
  } else {
    func.displayName = `Plasmic_03PatientEducationKnowledge.${nodeName}`;
  }
  return func;
}

export const Plasmic_03PatientEducationKnowledge = Object.assign(
  // Top-level Plasmic_03PatientEducationKnowledge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for Plasmic_03PatientEducationKnowledge
    internalVariantProps: Plasmic_03PatientEducationKnowledge__VariantProps,
    internalArgProps: Plasmic_03PatientEducationKnowledge__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_03PatientEducationKnowledge;
/* prettier-ignore-end */