// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: V-yKcXQfPehz

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

import { Video } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_51Persistinhealth.module.css"; // plasmic-import: V-yKcXQfPehz/css

createPlasmicElementProxy;

export type Plasmic_51Persistinhealth__VariantMembers = {};
export type Plasmic_51Persistinhealth__VariantsArgs = {};
type VariantPropType = keyof Plasmic_51Persistinhealth__VariantsArgs;
export const Plasmic_51Persistinhealth__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_51Persistinhealth__ArgsType = {};
type ArgPropType = keyof Plasmic_51Persistinhealth__ArgsType;
export const Plasmic_51Persistinhealth__ArgProps = new Array<ArgPropType>();

export type Plasmic_51Persistinhealth__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  htmlVideo?: Flex__<typeof Video>;
};

export interface Default_51PersistinhealthProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_51Persistinhealth__RenderFunc(props: {
  variants: Plasmic_51Persistinhealth__VariantsArgs;
  args: Plasmic_51Persistinhealth__ArgsType;
  overrides: Plasmic_51Persistinhealth__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox__sB1I7)}>
          <div className={classNames(projectcss.all, sty.freeBox__wnBp0)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yclpm
              )}
            >
              {"\u6587\u7ae0"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__kMc0B)}>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
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
                  sty.text__rDkUz
                )}
              >
                {"\u9000\u51fa"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__oieGw)}>
            <Video
              data-plasmic-name={"htmlVideo"}
              data-plasmic-override={overrides.htmlVideo}
              className={classNames("__wab_instance", sty.htmlVideo)}
              controls={true}
              src={
                "https://xiehe-1257043728.cos.ap-nanjing.myqcloud.com/dev/mp4/%E5%A6%82%E4%BD%95%E9%95%BF%E6%9C%9F%E5%9D%9A%E6%8C%81%E5%BA%B7%E5%A4%8D.mp4"
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wp6AB)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ht004
              )}
            >
              {"\u5982\u4f55\u957f\u671f\u575a\u6301\u5065\u5eb7\uff1a"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ihfHn
              )}
            >
              {
                "        \u8981\u4f7f\u8fd0\u52a8\u548c\u8fd0\u52a8\u7597\u6cd5\u6210\u4e3a\u65e5\u5e38\u751f\u6d3b\u7684\u4e00\u90e8\u5206\uff0c\u5173\u952e\u5728\u4e8e\u5efa\u7acb\u7a33\u56fa\u7684\u4e60\u60ef\uff0c\u627e\u5230\u6301\u4e4b\u4ee5\u6052\u7684\u52a8\u529b\uff0c\u5e76\u91c7\u7528\u7b56\u7565\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u751f\u6d3b\u60c5\u51b5\u3002"
              }
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__i3Xl)}
          onClick={async event => {
            const $steps = {};

            $steps["goTo5CommonQa"] = true
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
              $steps["goTo5CommonQa"] != null &&
              typeof $steps["goTo5CommonQa"] === "object" &&
              typeof $steps["goTo5CommonQa"].then === "function"
            ) {
              $steps["goTo5CommonQa"] = await $steps["goTo5CommonQa"];
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r54Jp
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
  root: ["root", "img", "htmlVideo"],
  img: ["img"],
  htmlVideo: ["htmlVideo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  htmlVideo: typeof Video;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_51Persistinhealth__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_51Persistinhealth__VariantsArgs;
    args?: Plasmic_51Persistinhealth__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_51Persistinhealth__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_51Persistinhealth__ArgsType,
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
          internalArgPropNames: Plasmic_51Persistinhealth__ArgProps,
          internalVariantPropNames: Plasmic_51Persistinhealth__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_51Persistinhealth__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_51Persistinhealth";
  } else {
    func.displayName = `Plasmic_51Persistinhealth.${nodeName}`;
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

export const Plasmic_51Persistinhealth = Object.assign(
  // Top-level Plasmic_51Persistinhealth renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    htmlVideo: makeNodeComponent("htmlVideo"),

    // Metadata about props expected for Plasmic_51Persistinhealth
    internalVariantProps: Plasmic_51Persistinhealth__VariantProps,
    internalArgProps: Plasmic_51Persistinhealth__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_51Persistinhealth;
/* prettier-ignore-end */