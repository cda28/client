import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
            <Link to="/students" className="[&.active]:font-bold">
                Students
            </Link>{' '}
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}
