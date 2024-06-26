// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: 8_0vv4y59QzM

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_2SafetyInstructions0000.module.css"; // plasmic-import: 8_0vv4y59QzM/css

createPlasmicElementProxy;

export type Plasmic_2SafetyInstructions0000__VariantMembers = {};
export type Plasmic_2SafetyInstructions0000__VariantsArgs = {};
type VariantPropType = keyof Plasmic_2SafetyInstructions0000__VariantsArgs;
export const Plasmic_2SafetyInstructions0000__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_2SafetyInstructions0000__ArgsType = {};
type ArgPropType = keyof Plasmic_2SafetyInstructions0000__ArgsType;
export const Plasmic_2SafetyInstructions0000__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_2SafetyInstructions0000__OverridesType = {
  root?: Flex__<"div">;
};

export interface Default_2SafetyInstructions0000Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_2SafetyInstructions0000__RenderFunc(props: {
  variants: Plasmic_2SafetyInstructions0000__VariantsArgs;
  args: Plasmic_2SafetyInstructions0000__ArgsType;
  overrides: Plasmic_2SafetyInstructions0000__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox___22W43)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mJop1
            )}
          >
            {"\u5b89\u5168\u987b\u77e5"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___1ITZy)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___3XCo6)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"25%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};

                $steps["goTo00LoginPage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
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
                  $steps["goTo00LoginPage"] != null &&
                  typeof $steps["goTo00LoginPage"] === "object" &&
                  typeof $steps["goTo00LoginPage"].then === "function"
                ) {
                  $steps["goTo00LoginPage"] = await $steps["goTo00LoginPage"];
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
                sty.text__tD8U
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___3AIix)}>
          <div className={classNames(projectcss.all, sty.freeBox__fHxDd)}>
            <div className={classNames(projectcss.all, sty.freeBox__sdsz)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__qVvjY)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/gu_lou_patient/images/未标题2画板21画板1Png.png",
                  fullWidth: 18,
                  fullHeight: 18,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gKz9N
                )}
              >
                {
                  "\u82e5\u6709\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd0\u52a8\u524d\u8bf7\u54a8\u8be2\u533b\u751f:"
                }
              </div>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nKeVa
              )}
            >
              {
                "\u8840\u538b\u6216\u8840\u7cd6\u4e0d\u7a33\u5b9a\u3001\u5934\u6655\u3001\u6c14\u77ed\u3001\u80f8\u90e8\u75bc\u75db\u6216\u538b\u8feb\u611f\u3001\u5fc3\u60b8\u3001\u8840\u6813\u3001\u808c\u8089\u75bc\u75db\u3001\u672a\u6108\u5408\u7684\u4f24\u53e3\u3001\u5173\u8282\u80bf\u80c0\u3001\u89c6\u7f51\u819c\u51fa\u8840\u6216\u8131\u843d\u3001\u8fd1\u671f\u773c\u90e8\u624b\u672f\u3001\u8fd1\u671f\u9acb/\u80cc\u90e8\u624b\u672f"
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__zFuyn)}>
            <div className={classNames(projectcss.all, sty.freeBox___0Xw9C)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___04F5J)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/gu_lou_patient/images/未标题2画板21画板1Png.png",
                  fullWidth: 18,
                  fullHeight: 18,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zxXmB
                )}
              >
                {"\u5176\u4ed6\u987b\u77e5:"}
              </div>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c0Xqu
              )}
            >
              {
                "\u8bf7\u7740\u8212\u670d\u7684\u8863\u670d\u548c\u9632\u6ed1\u978b\u5b50\u3001\u907f\u514d\u9971\u9910\u540e\u9a6c\u4e0a\u8fd0\u52a8\u3001\u4ece\u4e00\u4e2a\u60a8\u611f\u5230\u8212\u9002\u7684\u4f4e\u5f3a\u5ea6\u8bad\u7ec3\u5f00\u59cb\u3001\u8fd0\u52a8\u524d\u4e2d\u540e\u9002\u5f53\u559d\u6c34\u3001\u8fd0\u52a8\u4e0d\u5e94\u5f15\u8d77\u4e25\u91cd\u75bc\u75db\u3001\u907f\u514d\u8fd0\u52a8\u8fc7\u91cf(\u80c3\u90e8\u4e0d\u9002\u3001\u6076\u5fc3\u6216\u660e\u663e\u7684\u5173\u8282\u808c\u8089\u75bc\u75db\u7b49\u63d0\u793a\u8fd0\u52a8\u8fc7\u91cf)"
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___4ELit)}>
            <div className={classNames(projectcss.all, sty.freeBox__lGmex)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__zzIc6)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/gu_lou_patient/images/_23344画板1Png.png",
                  fullWidth: 18,
                  fullHeight: 18,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7V4Ow
                )}
              >
                {"\u505c\u6b62\u8fd0\u52a8\u6307\u5f81:"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___6QD0L)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bZDqA
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {"\u4e25\u91cd\u547c\u5438\u56f0\u96be\u611f"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {"\u81ea\u89c9\u75c7\u72b6:"}
                  </span>
                  <React.Fragment>
                    {
                      "\u80f8\u75db\u3001\u5fc3\u60b8\u3001\u75b2\u52b3\u3001\u5934\u6655\n"
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {"\u5fc3\u7387:"}
                  </span>
                  <React.Fragment>
                    {
                      "\u4e2a\u4f53\u6700\u5927\u5fc3\u7387\u768485%:\u80ba\u5fc3\u75c5\u60a3\u8005\u4e3a65-70%\n"
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {"\u547c\u5438\u9891\u7387:"}
                  </span>
                  <React.Fragment>
                    {"30\u6b21/\u5206\u4ee5\u4e0a\n"}
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {"\u8840\u538b:"}
                  </span>
                  <React.Fragment>
                    {
                      "\u6536\u7f29\u538b\u4e0b\u964d\uff0c\u8212\u5f20\u671f\u8840\u4e50\u4e0a\u5347"
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__rYok)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kFpJ
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-fDNuFs9Skt3p)" }}
                  >
                    {
                      "\u8bf7\u60a8\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0a\u5185\u5bb9\uff0c\u5e76\u786e\u8ba4\u77e5\u6653\u3002"
                    }
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__eBAbb)}
          onClick={async event => {
            const $steps = {};

            $steps["goTo21Train"] = true
              ? (() => {
                  const actionArgs = { destination: `/Train` };
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
              $steps["goTo21Train"] != null &&
              typeof $steps["goTo21Train"] === "object" &&
              typeof $steps["goTo21Train"].then === "function"
            ) {
              $steps["goTo21Train"] = await $steps["goTo21Train"];
            }
          }}
        >
          <div className={classNames(projectcss.all, sty.freeBox__tVaSh)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c20Ad
              )}
            >
              {"\u6211\u77e5\u9053\u4e86"}
            </div>
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
  Plasmic_2SafetyInstructions0000__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_2SafetyInstructions0000__VariantsArgs;
    args?: Plasmic_2SafetyInstructions0000__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_2SafetyInstructions0000__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_2SafetyInstructions0000__ArgsType,
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
          internalArgPropNames: Plasmic_2SafetyInstructions0000__ArgProps,
          internalVariantPropNames:
            Plasmic_2SafetyInstructions0000__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_2SafetyInstructions0000__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_2SafetyInstructions0000";
  } else {
    func.displayName = `Plasmic_2SafetyInstructions0000.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"oGeya3WnsoRJC1KzKAMsFn"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "oGeya3WnsoRJC1KzKAMsFn"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const Plasmic_2SafetyInstructions0000 = Object.assign(
  // Top-level Plasmic_2SafetyInstructions0000 renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for Plasmic_2SafetyInstructions0000
    internalVariantProps: Plasmic_2SafetyInstructions0000__VariantProps,
    internalArgProps: Plasmic_2SafetyInstructions0000__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_2SafetyInstructions0000;
/* prettier-ignore-end */
