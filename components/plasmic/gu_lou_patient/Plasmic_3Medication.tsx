// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: 9qP1Gp2tCR8X

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
import sty from "./Plasmic_3Medication.module.css"; // plasmic-import: 9qP1Gp2tCR8X/css

import ChecksvgIcon from "../radix_ui/icons/PlasmicIcon__Checksvg"; // plasmic-import: Wyt3GMMsLefj/icon

createPlasmicElementProxy;

export type Plasmic_3Medication__VariantMembers = {};
export type Plasmic_3Medication__VariantsArgs = {};
type VariantPropType = keyof Plasmic_3Medication__VariantsArgs;
export const Plasmic_3Medication__VariantProps = new Array<VariantPropType>();

export type Plasmic_3Medication__ArgsType = {};
type ArgPropType = keyof Plasmic_3Medication__ArgsType;
export const Plasmic_3Medication__ArgProps = new Array<ArgPropType>();

export type Plasmic_3Medication__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface Default_3MedicationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_3Medication__RenderFunc(props: {
  variants: Plasmic_3Medication__VariantsArgs;
  args: Plasmic_3Medication__ArgsType;
  overrides: Plasmic_3Medication__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox___9H9Ds)}>
          <div className={classNames(projectcss.all, sty.freeBox__a4F7W)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ewYuv
              )}
            >
              {"\u5217\u8868"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yJfGa)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__q1U4Y)}
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
                sty.text__vqPzG
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__vemTt)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__iKrwX)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/_83转换02Png.png",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__pnUEf)}>
          <div
            className={classNames(projectcss.all, sty.freeBox__fjR8N)}
            onClick={async event => {
              const $steps = {};
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gqF3)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hc7Gm
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToPage"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: (() => {
                            try {
                              return (
                                $ctx.config.routePrefix + "/Usingmedication"
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
                {"\u7528\u836f"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__c31UW)}>
                <ChecksvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___0Ftu8)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo42Vitamin"] = true
                ? (() => {
                    const actionArgs = { destination: `/Vitamin` };
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
                $steps["goTo42Vitamin"] != null &&
                typeof $steps["goTo42Vitamin"] === "object" &&
                typeof $steps["goTo42Vitamin"].then === "function"
              ) {
                $steps["goTo42Vitamin"] = await $steps["goTo42Vitamin"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__icjiA)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fkLtd
                )}
              >
                {"\u7ef4\u751f\u7d20"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___5L76T)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo43Protein"] = true
                ? (() => {
                    const actionArgs = { destination: `/Protein` };
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
                $steps["goTo43Protein"] != null &&
                typeof $steps["goTo43Protein"] === "object" &&
                typeof $steps["goTo43Protein"].then === "function"
              ) {
                $steps["goTo43Protein"] = await $steps["goTo43Protein"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__oQfuW)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hFrMe
                )}
              >
                {"\u86cb\u767d\u8d28"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__e8X)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo44Fat"] = true
                ? (() => {
                    const actionArgs = { destination: `/Fat` };
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
                $steps["goTo44Fat"] != null &&
                typeof $steps["goTo44Fat"] === "object" &&
                typeof $steps["goTo44Fat"].then === "function"
              ) {
                $steps["goTo44Fat"] = await $steps["goTo44Fat"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__d9I2)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mrIq0
                )}
              >
                {"\u8102\u80aa"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___2STk)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo45Minerals"] = true
                ? (() => {
                    const actionArgs = { destination: `/Minerals` };
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
                $steps["goTo45Minerals"] != null &&
                typeof $steps["goTo45Minerals"] === "object" &&
                typeof $steps["goTo45Minerals"].then === "function"
              ) {
                $steps["goTo45Minerals"] = await $steps["goTo45Minerals"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nPz7T)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sXh5W
                )}
              >
                {"\u77ff\u7269\u8d28"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__abp5I)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo46VariousTypesOfFood"] = true
                ? (() => {
                    const actionArgs = { destination: `/Varioustypesoffood` };
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
                $steps["goTo46VariousTypesOfFood"] != null &&
                typeof $steps["goTo46VariousTypesOfFood"] === "object" &&
                typeof $steps["goTo46VariousTypesOfFood"].then === "function"
              ) {
                $steps["goTo46VariousTypesOfFood"] = await $steps[
                  "goTo46VariousTypesOfFood"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ve1O6)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9QlCu
                )}
              >
                {"\u5404\u7c7b\u98df\u7269"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___6LX5T)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo47ChooseFood"] = true
                ? (() => {
                    const actionArgs = { destination: `/Choosefood` };
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
                $steps["goTo47ChooseFood"] != null &&
                typeof $steps["goTo47ChooseFood"] === "object" &&
                typeof $steps["goTo47ChooseFood"].then === "function"
              ) {
                $steps["goTo47ChooseFood"] = await $steps["goTo47ChooseFood"];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox___5PpLt)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yvGn
                )}
              >
                {"\u9009\u62e9\u98df\u7269"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__bkpre)}
            onClick={async event => {
              const $steps = {};

              $steps["goTo48BalancedDietaryGuidelines"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/BalancedDietaryGuidelines`
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
                $steps["goTo48BalancedDietaryGuidelines"] != null &&
                typeof $steps["goTo48BalancedDietaryGuidelines"] === "object" &&
                typeof $steps["goTo48BalancedDietaryGuidelines"].then ===
                  "function"
              ) {
                $steps["goTo48BalancedDietaryGuidelines"] = await $steps[
                  "goTo48BalancedDietaryGuidelines"
                ];
              }
            }}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gr6P6)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tBNkB
                )}
              >
                {"\u81b3\u98df\u6307\u5357"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__ib8Jv)}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return (
                          $ctx.config.routePrefix + "/Patienteducationknowledge"
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
              sty.text__ubsXi
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
  root: ["root", "svg", "sideEffect"],
  svg: ["svg"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_3Medication__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_3Medication__VariantsArgs;
    args?: Plasmic_3Medication__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_3Medication__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_3Medication__ArgsType,
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
          internalArgPropNames: Plasmic_3Medication__ArgProps,
          internalVariantPropNames: Plasmic_3Medication__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_3Medication__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_3Medication";
  } else {
    func.displayName = `Plasmic_3Medication.${nodeName}`;
  }
  return func;
}

export const Plasmic_3Medication = Object.assign(
  // Top-level Plasmic_3Medication renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for Plasmic_3Medication
    internalVariantProps: Plasmic_3Medication__VariantProps,
    internalArgProps: Plasmic_3Medication__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_3Medication;
/* prettier-ignore-end */
