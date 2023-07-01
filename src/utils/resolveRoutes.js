const resolveRoutes = (route) => {
    if (route.length<=3) {
        let valdRoute = route === '/' ? route : '/:id';
        return valdRoute;
    }
    return `/${route}`;
};
export default resolveRoutes;