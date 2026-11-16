import { useEffect, useState } from "react"

const mobileQuery = "(width < 768px)"
const tabletQuery = "(768px <= width < 1025px)"

function useScreenSize() {
    const [screen, setScreenSize] = useState(() => getScreenSize())

    useEffect(() => {
        const queries = [window.matchMedia(mobileQuery), window.matchMedia(tabletQuery)]
        const update = () => setScreenSize(getScreenSize())
        queries.forEach(query => query.addEventListener("change", update))
        update()
        return () => queries.forEach(query => query.removeEventListener("change", update))
    }, [])

    return {
        screen,
        isMobile: screen === "mobile",
        isTablet: screen === "tablet",
        isDesktop: screen === "desktop"
    }
}

function getScreenSize() {
    if (window.matchMedia(mobileQuery).matches) return "mobile"
    if (window.matchMedia(tabletQuery).matches) return "tablet"
    return "desktop"
}

export default useScreenSize
