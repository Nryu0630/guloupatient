// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: 0GJYXgHy6SrU

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
import sty from "./Plasmic_2PreAdmissionRehabilitationTeam.module.css"; // plasmic-import: 0GJYXgHy6SrU/css

createPlasmicElementProxy;

export type Plasmic_2PreAdmissionRehabilitationTeam__VariantMembers = {};
export type Plasmic_2PreAdmissionRehabilitationTeam__VariantsArgs = {};
type VariantPropType =
  keyof Plasmic_2PreAdmissionRehabilitationTeam__VariantsArgs;
export const Plasmic_2PreAdmissionRehabilitationTeam__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_2PreAdmissionRehabilitationTeam__ArgsType = {};
type ArgPropType = keyof Plasmic_2PreAdmissionRehabilitationTeam__ArgsType;
export const Plasmic_2PreAdmissionRehabilitationTeam__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_2PreAdmissionRehabilitationTeam__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_2PreAdmissionRehabilitationTeamProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_2PreAdmissionRehabilitationTeam__RenderFunc(props: {
  variants: Plasmic_2PreAdmissionRehabilitationTeam__VariantsArgs;
  args: Plasmic_2PreAdmissionRehabilitationTeam__ArgsType;
  overrides: Plasmic_2PreAdmissionRehabilitationTeam__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__n94Eh)}>
          <div className={classNames(projectcss.all, sty.freeBox__dwSoa)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fxCTi
              )}
            >
              {"\u5217\u8868"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___2Nf6B)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__uXgQn)}
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
                sty.text__umadg
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__arm1I)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__trHwl)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/_1818转换01Png.png",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__cVhy6)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/暂无内容png.png",
              fullWidth: 683,
              fullHeight: 474,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fpibW
            )}
          >
            {"\u6682\u65e0\u5185\u5bb9"}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__vbx8Y)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__lR4Ps)}
            onClick={async event => {
              const $steps = {};

              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: (() => {
                        try {
                          return (
                            $ctx.config.routePrefix +
                            "/Inpatientdepartmentnavigation"
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
            <div className={classNames(projectcss.all, sty.freeBox___7WGdb)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p7Gf9
                )}
              >
                {"\u4f4f\u9662\u90e8\u5bfc\u822a"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___8YcJq)}>
            <div
              className={classNames(projectcss.all, sty.freeBox__pxI6)}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return (
                              $ctx.config.routePrefix +
                              "/Supportsandotherpreparations"
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
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xoq90
                )}
              >
                {"\u652f\u5177\u7b49\u5907\u7269"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___8Om2Y)}>
            <div
              className={classNames(projectcss.all, sty.freeBox___7F471)}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return $ctx.config.routePrefix + "/Frailtyscale";
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
                  sty.text__wTVzw
                )}
              >
                {"\u8870\u5f31\u91cf\u8868"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__hoiv7)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo34TreatmentOfEsophagealForeignBodies"] = true
                ? (() => {
                    const actionArgs = { destination: `/Functionalscale` };
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
                $steps["goTo34TreatmentOfEsophagealForeignBodies"] != null &&
                typeof $steps["goTo34TreatmentOfEsophagealForeignBodies"] ===
                  "object" &&
                typeof $steps["goTo34TreatmentOfEsophagealForeignBodies"]
                  .then === "function"
              ) {
                $steps["goTo34TreatmentOfEsophagealForeignBodies"] =
                  await $steps["goTo34TreatmentOfEsophagealForeignBodies"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__x016L)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mZkzg
                )}
              >
                {"\u98df\u7ba1\u5f02\u7269\u5904\u7406"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__kW8E)}>
            <div
              className={classNames(projectcss.all, sty.freeBox___0FzvG)}
              onClick={async event => {
                const $steps = {};

                $steps["goTo35PiccTubePlacementProcessing"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/PICCtubeplacementprocessing`
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
                  $steps["goTo35PiccTubePlacementProcessing"] != null &&
                  typeof $steps["goTo35PiccTubePlacementProcessing"] ===
                    "object" &&
                  typeof $steps["goTo35PiccTubePlacementProcessing"].then ===
                    "function"
                ) {
                  $steps["goTo35PiccTubePlacementProcessing"] = await $steps[
                    "goTo35PiccTubePlacementProcessing"
                  ];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qY2Kb
                )}
              >
                {"PICC\u7f6e\u7ba1\u5904\u7406"}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__f2Vcq
            )}
          >
            {"Enter some text"}
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__lslav)}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return (
                          $ctx.config.routePrefix + "/Preadmissionnursingteam"
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
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cdAKf
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
  Plasmic_2PreAdmissionRehabilitationTeam__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_2PreAdmissionRehabilitationTeam__VariantsArgs;
    args?: Plasmic_2PreAdmissionRehabilitationTeam__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    Plasmic_2PreAdmissionRehabilitationTeam__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      Plasmic_2PreAdmissionRehabilitationTeam__ArgsType,
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
          internalArgPropNames:
            Plasmic_2PreAdmissionRehabilitationTeam__ArgProps,
          internalVariantPropNames:
            Plasmic_2PreAdmissionRehabilitationTeam__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_2PreAdmissionRehabilitationTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_2PreAdmissionRehabilitationTeam";
  } else {
    func.displayName = `Plasmic_2PreAdmissionRehabilitationTeam.${nodeName}`;
  }
  return func;
}

export const Plasmic_2PreAdmissionRehabilitationTeam = Object.assign(
  // Top-level Plasmic_2PreAdmissionRehabilitationTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_2PreAdmissionRehabilitationTeam
    internalVariantProps: Plasmic_2PreAdmissionRehabilitationTeam__VariantProps,
    internalArgProps: Plasmic_2PreAdmissionRehabilitationTeam__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_2PreAdmissionRehabilitationTeam;
/* prettier-ignore-end */
