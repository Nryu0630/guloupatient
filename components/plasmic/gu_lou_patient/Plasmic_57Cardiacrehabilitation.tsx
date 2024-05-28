// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: gFan7cAIHj-F

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

import { Video } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_57Cardiacrehabilitation.module.css"; // plasmic-import: gFan7cAIHj-F/css

createPlasmicElementProxy;

export type Plasmic_57Cardiacrehabilitation__VariantMembers = {};
export type Plasmic_57Cardiacrehabilitation__VariantsArgs = {};
type VariantPropType = keyof Plasmic_57Cardiacrehabilitation__VariantsArgs;
export const Plasmic_57Cardiacrehabilitation__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_57Cardiacrehabilitation__ArgsType = {};
type ArgPropType = keyof Plasmic_57Cardiacrehabilitation__ArgsType;
export const Plasmic_57Cardiacrehabilitation__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_57Cardiacrehabilitation__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  htmlVideo?: Flex__<typeof Video>;
};

export interface Default_57CardiacrehabilitationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_57Cardiacrehabilitation__RenderFunc(props: {
  variants: Plasmic_57Cardiacrehabilitation__VariantsArgs;
  args: Plasmic_57Cardiacrehabilitation__ArgsType;
  overrides: Plasmic_57Cardiacrehabilitation__OverridesType;
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
        <div className={classNames(projectcss.all, sty.freeBox___3IPbh)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qs5Z7
            )}
          >
            {"\u6587\u7ae0"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__l9QH)}>
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
                sty.text___7Ct2P
              )}
            >
              {"\u9000\u51fa"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__t2Bnw)}>
          <Video
            data-plasmic-name={"htmlVideo"}
            data-plasmic-override={overrides.htmlVideo}
            className={classNames("__wab_instance", sty.htmlVideo)}
            controls={true}
            src={
              "https://xiehe-1257043728.cos.ap-nanjing.myqcloud.com/dev/mp4/4%E6%9C%889%E6%97%A5%20%282%29.mp4"
            }
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__sqGwr)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___3HjEb
            )}
          >
            {"\u5982\u4f55\u8fdb\u884c\u5fc3\u810f\u5eb7\u590d\uff1a"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wBb8L
            )}
          >
            {
              "        \u8fd0\u52a8\u6cbb\u7597\u662f\u5fc3\u810f\u5eb7\u590d\u8fc7\u7a0b\u4e2d\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5b83\u5bf9\u4e8e\u6539\u5584\u5fc3\u8840\u7ba1\u5065\u5eb7\u3001\u589e\u5f3a\u4f53\u529b\u4e0e\u5fc3\u80ba\u529f\u80fd\u3001\u4ee5\u53ca\u6539\u5584\u4e00\u7cfb\u5217\u5fc3\u8840\u7ba1\u75be\u75c5\u7684\u5371\u9669\u56e0\u7d20(\u5982\u9ad8\u8840\u538b\u548c\u9ad8\u8840\u7cd6)\u5177\u6709\u663e\u8457\u6548\u679c\u3002\u9002\u5f53\u7684\u8fd0\u52a8\u8fd8\u80fd\u591f\u7f13\u89e3\u538b\u529b\u3001\u63d0\u9ad8\u751f\u6d3b\u8d28\u91cf\uff0c\u51cf\u5c11\u4f4f\u9662\u7387\u548c\u5fc3\u6e90\u6027\u6b7b\u4ea1\u7684\u98ce\u9669\u3002"
            }
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__izy2C)}
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
                sty.text__dbqTp
              )}
            >
              {"\u8fd4\u56de"}
            </div>
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
  Plasmic_57Cardiacrehabilitation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_57Cardiacrehabilitation__VariantsArgs;
    args?: Plasmic_57Cardiacrehabilitation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_57Cardiacrehabilitation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_57Cardiacrehabilitation__ArgsType,
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
          internalArgPropNames: Plasmic_57Cardiacrehabilitation__ArgProps,
          internalVariantPropNames:
            Plasmic_57Cardiacrehabilitation__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_57Cardiacrehabilitation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_57Cardiacrehabilitation";
  } else {
    func.displayName = `Plasmic_57Cardiacrehabilitation.${nodeName}`;
  }
  return func;
}

export const Plasmic_57Cardiacrehabilitation = Object.assign(
  // Top-level Plasmic_57Cardiacrehabilitation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    htmlVideo: makeNodeComponent("htmlVideo"),

    // Metadata about props expected for Plasmic_57Cardiacrehabilitation
    internalVariantProps: Plasmic_57Cardiacrehabilitation__VariantProps,
    internalArgProps: Plasmic_57Cardiacrehabilitation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_57Cardiacrehabilitation;
/* prettier-ignore-end */
