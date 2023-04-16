import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import materialsAssets from './materials'
import {useThreeRender} from './hook'
const RoomView: React.FC = () => {
    const roomViewRef = useRef<HTMLDivElement>(null)
    const [materials, setMaterials] = useState<string | string[]>(materialsAssets['living'])
    const [materialsAssetName, setMaterialsAssetName] = useState<string>('living')
    const {camera, scene, renderer} = useThreeRender<string | string[]>(materials)
    const handleClickSelect = (materialsAsset: string) => {
        if(materialsAssetName !== materialsAsset) {
            renderer.domElement.remove()
            setMaterials(materialsAssets[materialsAsset]) 
            setMaterialsAssetName(materialsAsset)
        }
    }
    const render = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(render)
    }
    useEffect(() => {
        roomViewRef.current!.appendChild(renderer.domElement)
        render()
    }, [renderer])
    return (
        <>
            <div className={styles["room-view-container"]} ref={roomViewRef}>
                <div className={styles["view-select"]}>
                    <ul>
                        {
                           Object.keys(materialsAssets)
                                 .map((materialsAsset) => {
                                        return (
                                            <li 
                                                className={materialsAsset === materialsAssetName ? styles['view-selected'] : undefined}
                                                key={materialsAsset}
                                                onClick={() => handleClickSelect(materialsAsset)}
                                            >
                                                {materialsAsset}
                                            </li>
                                        )
                                    })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
export default RoomView