import { useEffect, useState } from "react"

function checkScreenSize(width) {
    if (width > 374 && width < 768) return "mobile"
    if (width > 767 && width < 1025) return "tablet"
    return "desktop"
}

function getScreenSize() {
    const [screen, setScreenSize] = useState(checkScreenSize(window.innerWidth))

    useEffect(() => {
        const handleIsResize = () => { setScreenSize(checkScreenSize(window.innerWidth)) }
        window.addEventListener("resize", handleIsResize)
        return () => window.removeEventListener("resize", handleIsResize)
    }, [])

    return {
        screen,
        isMobile: screen === "mobile",
        isTablet: screen === "tablet",
        isDesktop: screen === "desktop"
    }
}

export default getScreenSize