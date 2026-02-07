import { useEffect, useState } from "react"

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    useEffect(() => {
        const handleIsResize = () => setIsMobile(window.innerWidth <= 600)
        window.addEventListener("resize", handleIsResize)
        return () => window.removeEventListener("resize", handleIsResize)
    }, [])

    return isMobile
}

export default useIsMobile