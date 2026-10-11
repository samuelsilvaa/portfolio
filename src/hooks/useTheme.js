import { useState, useEffect } from "react"

function useTheme() {

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') !== 'light'
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [isDark])

    const toggleTheme = () => setIsDark((prev) => !prev)


    return { isDark, toggleTheme }
}


export default useTheme