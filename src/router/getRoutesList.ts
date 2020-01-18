// Custom function to List an arry of routes names and paths
function getRoutesList(
  routes: { path: string; name: string }[],
  pre: string
): { path: string; name: string }[] {
  return routes.reduce(
    (
      array: { path: string; name: string }[],
      route: { name: string; path: string; children?: any }
    ) => {
      const path = `${pre}${route.path}`;

      if (route.path !== "*" && route.name !== "ItemDetails") {
        array.push({ name: route.name, path });
      }

      if (route.children) {
        array.push(...getRoutesList(route.children, `${path}/`));
      }

      return array;
    },
    []
  );
}

export default getRoutesList;
