import { useAtom, atom } from 'jotai'
import { RouteType } from '../routing'

const routeAtom = atom<RouteType>({} as RouteType)

export const useConfigStore = () => {
    const [selectedRoute, setSelectedRoute] = useAtom(routeAtom)

    return {
        state: {
            selectedRoute
        },
        actions: {
            setSelectedRoute
        }
    }
}
