import { useState, useEffect } from "react";

function useTypewriter(words, {typeSpeed = 90, deleteSpeed = 50, pause = 1800} = {}) {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[index]
        let timeout

        if(!isDeleting && text === word) {
            timeout = setTimeout(() => setIsDeleting(true), pause)
        } else if(isDeleting && text === '') {

            // terminoud de apagar passa para a proxima letra
            setIsDeleting(false)
            setIndex((prev) => (prev + 1) % words.length)
        } else {

            // digita ou apaga as letras 
            timeout = setTimeout(() => {
                setText(
                    isDeleting
                        ? word.slice(0, text.length -1)
                        : word.slice(0, text.length + 1)
                )
            }, isDeleting ? deleteSpeed : typeSpeed)
        }

        return () => clearTimeout(timeout)
    }, [text, isDeleting, index, words, pause, typeSpeed, deleteSpeed])

    return text
}   


export default useTypewriter