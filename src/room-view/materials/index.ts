import KitchenMaterial from '../../assets/kitchen/kitchen.hdr'

import livingMaterial_l from '../../assets/living/l.jpg'
import livingMaterial_r from '../../assets/living/r.jpg'
import livingMaterial_u from '../../assets/living/u.jpg'
import livingMaterial_d from '../../assets/living/d.jpg'
import livingMaterial_b from '../../assets/living/b.jpg'
import livingMaterial_f from '../../assets/living/f.jpg'

import bedroomMaterial_l from '../../assets/bedroom/l.jpg'
import bedroomMaterial_r from '../../assets/bedroom/r.jpg'
import bedroomMaterial_u from '../../assets/bedroom/u.jpg'
import bedroomMaterial_d from '../../assets/bedroom/d.jpg'
import bedroomMaterial_b from '../../assets/bedroom/b.jpg'
import bedroomMaterial_f from '../../assets/bedroom/f.jpg'

import childroomMaterial_l from '../../assets/childroom/l.jpg'
import childroomMaterial_r from '../../assets/childroom/r.jpg'
import childroomMaterial_u from '../../assets/childroom/u.jpg'
import childroomMaterial_d from '../../assets/childroom/d.jpg'
import childroomMaterial_b from '../../assets/childroom/b.jpg'
import childroomMaterial_f from '../../assets/childroom/f.jpg'

import restroomMaterial_l from '../../assets/restroom/l.jpg'
import restroomMaterial_r from '../../assets/restroom/r.jpg'
import restroomMaterial_u from '../../assets/restroom/u.jpg'
import restroomMaterial_d from '../../assets/restroom/d.jpg'
import restroomMaterial_b from '../../assets/restroom/b.jpg'
import restroomMaterial_f from '../../assets/restroom/f.jpg'

const livingMaterials = [
    livingMaterial_l,
    livingMaterial_r,
    livingMaterial_u,
    livingMaterial_d,
    livingMaterial_b,
    livingMaterial_f
]

const bedroomMaterials = [
    bedroomMaterial_l,
    bedroomMaterial_r,
    bedroomMaterial_u,
    bedroomMaterial_d,
    bedroomMaterial_b,
    bedroomMaterial_f
]

const childroomMaterials = [
    childroomMaterial_l,
    childroomMaterial_r,
    childroomMaterial_u,
    childroomMaterial_d,
    childroomMaterial_b,
    childroomMaterial_f
]

const restroomMaterials = [
    restroomMaterial_l,
    restroomMaterial_r,
    restroomMaterial_u,
    restroomMaterial_d,
    restroomMaterial_b,
    restroomMaterial_f
]

export default {
    'living': livingMaterials,
    'bedroom': bedroomMaterials,
    'childroom': childroomMaterials,
    'restroom': restroomMaterials,
    'kitchen': KitchenMaterial,
} as {
    [key: string]: string | string[]
}