### React Hook 封装的RoomView组件，在线看房的动态3D效果
```shell
1. npm install  下载相关依赖
2. npm run start 启动项目
3. npm run build 打包组件，可自由导出使用
```
###### 初始化渲染器相机场景功能 -> 自定义Hook
```javascript
export function useThreeRender<T extends string | string[]>(materials: T) 
//......
const {camera, scene, renderer} = useThreeRender<string | string[]>(materials)
```

###### HDR与JPG贴图
```javascript
    //materials为数组 BoxGeometry + TextureLoader
    if(Array.isArray(materials)) {
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const boxMaterials: THREE.MeshBasicMaterial[] = [];
        materials.forEach((item) => {
          let texture = new THREE.TextureLoader().load(item);
          if (item.includes("/u") || item.includes("/d")) {
            texture.rotation = Math.PI;
            texture.center = new THREE.Vector2(0.5, 0.5);
            boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
          } else {
            boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
          }
        });
        const cube = new THREE.Mesh(geometry, boxMaterials);
        cube.geometry.scale(1, 1, -1);
        scene.add(cube);
    // materials为HDR SphereGeometry + RGBELoader
    } else {
        const loader = new RGBELoader();
        loader.load(materials, (texture) => {
            const geometry = new THREE.SphereGeometry(5, 32, 32);     
            const material = new THREE.MeshBasicMaterial({ map: texture });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.geometry.scale(1, 1, -1);
            scene.add(sphere);
        });
    }  
```
###### 移动相机位置，模拟真人室内移动，增加室内交互
```javascript
//TODO
```