import { useEffect, useState } from "react";

const useImgSizeFromWindow = ( widthMultiplyer: number, heightMultiplyer: number) => {
    const [imgSize, setImgSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const handleImgResize = () => {
            setImgSize({
                width: window.innerWidth * widthMultiplyer,
                height: window.innerHeight * heightMultiplyer
            })
        }
        handleImgResize()
        window.addEventListener('resize', handleImgResize)

        return () => window.removeEventListener('resize', handleImgResize)
    }, [])
    return imgSize
}

export default useImgSizeFromWindow