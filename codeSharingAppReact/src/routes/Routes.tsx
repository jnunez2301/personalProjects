import {
  Outlet,
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { MonacoEditor } from "../componets/MonacoEditor";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <MonacoEditor />
      <Outlet />
    </>
  ),
});

const codeIdRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `$codeId`,
})

const routeTree = rootRoute.addChildren([codeIdRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const Routes = () => {
    return <RouterProvider router={router} />;
  };
  
export default Routes;