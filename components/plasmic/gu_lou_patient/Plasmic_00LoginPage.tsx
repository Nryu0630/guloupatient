// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGeya3WnsoRJC1KzKAMsFn
// Component: hB1Gp2sVqE1Y

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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oGeya3WnsoRJC1KzKAMsFn/projectcss
import sty from "./Plasmic_00LoginPage.module.css"; // plasmic-import: hB1Gp2sVqE1Y/css

createPlasmicElementProxy;

export type Plasmic_00LoginPage__VariantMembers = {};
export type Plasmic_00LoginPage__VariantsArgs = {};
type VariantPropType = keyof Plasmic_00LoginPage__VariantsArgs;
export const Plasmic_00LoginPage__VariantProps = new Array<VariantPropType>();

export type Plasmic_00LoginPage__ArgsType = {};
type ArgPropType = keyof Plasmic_00LoginPage__ArgsType;
export const Plasmic_00LoginPage__ArgProps = new Array<ArgPropType>();

export type Plasmic_00LoginPage__OverridesType = {
  root?: Flex__<"div">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  input2?: Flex__<typeof AntdInput>;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface Default_00LoginPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_00LoginPage__RenderFunc(props: {
  variants: Plasmic_00LoginPage__VariantsArgs;
  args: Plasmic_00LoginPage__ArgsType;
  overrides: Plasmic_00LoginPage__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "buttonText",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          "\u83b7\u53d6\u9a8c\u8bc1\u7801"
      },
      {
        path: "seconds",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        <div className={classNames(projectcss.all, sty.freeBox__ethPh)}>
          <div className={classNames(projectcss.all, sty.freeBox__aABxg)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__aTPii)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"7%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/gu_lou_patient/images/人像01Png.png",
                fullWidth: 500,
                fullHeight: 500,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o2X5Z
              )}
            >
              {"\u672a\u767b\u5f55"}
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__a8AqO)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__tGzEv)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/gu_lou_patient/images/doctor22Jpgjpg.jpg",
              fullWidth: 1000,
              fullHeight: 500,
              aspectRatio: undefined
            }}
          />

          <div className={classNames(projectcss.all, sty.freeBox__z9NUy)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__grS8
              )}
            >
              {"\u7533\u8bf7\u83b7\u53d6\u4ee5\u4e0b\u6743\u9650:"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__jTLln)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5JzOl
              )}
            >
              {"\u60a8\u7684\u624b\u673a\u53f7\u7801"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__m4Kj)}>
            {(() => {
              const child$Props = {
                autoDisableWhileSubmitting: true,
                className: classNames("__wab_instance", sty.form),
                extendedOnValuesChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["form", "value"],
                    FormWrapper_Helpers
                  ),
                formItems: undefined,
                labelAlign: "right",
                labelCol: { span: 8, horizontalOnly: true },
                layout: "vertical",
                mode: undefined,
                onIsSubmittingChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "isSubmitting",
                    ["form", "isSubmitting"],
                    FormWrapper_Helpers
                  ),
                ref: ref => {
                  $refs["form"] = ref;
                },
                wrapperCol: (() => {
                  const __composite = { span: 16, horizontalOnly: null };
                  __composite["horizontalOnly"] = true;
                  return __composite;
                })()
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "form.value"
                  },
                  {
                    name: "isSubmitting",
                    plasmicStateName: "form.isSubmitting"
                  }
                ],
                [],
                FormWrapper_Helpers ?? {},
                child$Props
              );

              return (
                <FormWrapper
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  {...child$Props}
                >
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__fzJfe
                    )}
                    hidden={false}
                    hideValidationMessage={false}
                    initialValue={"\u624b\u673a\u53f7"}
                    label={"\u624b\u673a\u53f7"}
                    name={``}
                    noLabel={false}
                    noStyle={true}
                    preserve={true}
                    shouldUpdate={false}
                    trigger={``}
                  >
                    <AntdInput
                      className={classNames("__wab_instance", sty.input__zFf3D)}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField___40Uk4
                    )}
                    initialValue={"\u9a8c\u8bc1\u7801"}
                    label={"\u9a8c\u8bc1\u7801"}
                    name={"message"}
                    noStyle={true}
                  >
                    <AntdInput
                      className={classNames("__wab_instance", sty.input__zTb)}
                    />
                  </FormItemWrapper>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__h79Qb)}
                    disabled={false}
                    submitsForm={true}
                    type={"primary"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3Arqw
                      )}
                    >
                      {"\u767b\u5f55"}
                    </div>
                  </AntdButton>
                </FormWrapper>
              );
            })()}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__g9TrN)}>
          {(() => {
            const child$Props = {
              allowClear: false,
              autoFocus: false,
              className: classNames("__wab_instance", sty.input),
              disabled: false,
              onChange: generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["input", "value"],
                AntdInput_Helpers
              ),
              placeholder: "\u624b\u673a\u53f7",
              readOnly: false,
              size: "large",
              type: "text",
              value: generateStateValueProp($state, ["input", "value"])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "input.value"
                }
              ],
              [],
              AntdInput_Helpers ?? {},
              child$Props
            );

            return (
              <AntdInput
                data-plasmic-name={"input"}
                data-plasmic-override={overrides.input}
                {...child$Props}
              />
            );
          })()}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__mPVjE)}>
          {(() => {
            const child$Props = {
              allowClear: false,
              autoFocus: false,
              className: classNames("__wab_instance", sty.input2),
              disabled: false,
              onChange: generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["input2", "value"],
                AntdInput_Helpers
              ),
              onPressEnter: async event => {
                const $steps = {};

                $steps["updateInputValue"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["input", "value"]
                        },
                        operation: 0
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateInputValue"] != null &&
                  typeof $steps["updateInputValue"] === "object" &&
                  typeof $steps["updateInputValue"].then === "function"
                ) {
                  $steps["updateInputValue"] = await $steps["updateInputValue"];
                }
              },
              placeholder: "\u9a8c\u8bc1\u7801",
              prefix: null,
              readOnly: false,
              size: "large",
              suffix: (
                <AntdButton
                  className={classNames("__wab_instance", sty.button__bCrZn)}
                  disabled={(() => {
                    try {
                      return $state.seconds > 0;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  onClick={async () => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                $state.seconds = 60;
                                $state.buttonText = `${$state.seconds}秒重新获取`;
                                return setInterval(() => {
                                  if ($state.seconds > 0) {
                                    $state.seconds = $state.seconds - 1;
                                    $state.buttonText = `${$state.seconds}秒重新获取`;
                                  } else {
                                    $state.buttonText = "获取验证码";
                                  }
                                }, 1000);
                              })();
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              "/hospitalserver/user/sendSms",
                              (() => {
                                try {
                                  return (() => {
                                    return {
                                      account: $state.input.value,
                                      role: "p"
                                    };
                                  })();
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return $globalActions["GlobalContext.post"]?.apply(
                            null,
                            [...actionArgs.args]
                          );
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }
                  }}
                  size={"large"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fwrn6
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $state.buttonText;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u83b7\u53d6\u9a8c\u8bc1\u7801";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </AntdButton>
              ),
              type: "text",
              value: generateStateValueProp($state, ["input2", "value"])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "input2.value"
                }
              ],
              [],
              AntdInput_Helpers ?? {},
              child$Props
            );

            return (
              <AntdInput
                data-plasmic-name={"input2"}
                data-plasmic-override={overrides.input2}
                {...child$Props}
              />
            );
          })()}
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__cepct)}
          onClick={async event => {
            const $steps = {};
          }}
        >
          <AntdButton
            className={classNames("__wab_instance", sty.button___3LFpr)}
            onClick={async () => {
              const $steps = {};

              $steps["invokeGlobalAction"] = true
                ? (() => {
                    const actionArgs = { args: ["user00046", "11111111", 1] };
                    return $globalActions["GlobalContext.login"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["invokeGlobalAction"] != null &&
                typeof $steps["invokeGlobalAction"] === "object" &&
                typeof $steps["invokeGlobalAction"].then === "function"
              ) {
                $steps["invokeGlobalAction"] = await $steps[
                  "invokeGlobalAction"
                ];
              }

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
            size={"large"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6Bb9X
              )}
            >
              {"\u767b\u5f55"}
            </div>
          </AntdButton>
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
  root: ["root", "form", "input", "input2", "sideEffect"],
  form: ["form"],
  input: ["input"],
  input2: ["input2"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  input2: typeof AntdInput;
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_00LoginPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_00LoginPage__VariantsArgs;
    args?: Plasmic_00LoginPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_00LoginPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_00LoginPage__ArgsType,
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
          internalArgPropNames: Plasmic_00LoginPage__ArgProps,
          internalVariantPropNames: Plasmic_00LoginPage__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_00LoginPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_00LoginPage";
  } else {
    func.displayName = `Plasmic_00LoginPage.${nodeName}`;
  }
  return func;
}

export const Plasmic_00LoginPage = Object.assign(
  // Top-level Plasmic_00LoginPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for Plasmic_00LoginPage
    internalVariantProps: Plasmic_00LoginPage__VariantProps,
    internalArgProps: Plasmic_00LoginPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_00LoginPage;
/* prettier-ignore-end */
