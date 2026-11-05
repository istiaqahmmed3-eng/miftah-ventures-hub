import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { appStoreLinks } from "@/components/founder-site";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("links Hello-02 to its official Play Store and App Store listings", () => {
    expect(appStoreLinks.googlePlay).toBe("https://play.google.com/store/apps/details?id=com.teambbs.hello02");
    expect(appStoreLinks.appStore).toBe("https://apps.apple.com/app/hello-02-mental-health-app/id6805609446");
  });
});
