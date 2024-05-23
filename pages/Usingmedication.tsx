// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/gu_lou_patient/PlasmicGlobalContextsProvider";

import { Plasmic_31Usingmedication } from "../components/plasmic/gu_lou_patient/Plasmic_31Usingmedication";
import { useRouter } from "next/router";

function _31Usingmedication() {
  // Use Plasmic_31Usingmedication to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_31Usingmedication are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmic_31Usingmedication is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <Plasmic_31Usingmedication />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default _31Usingmedication;