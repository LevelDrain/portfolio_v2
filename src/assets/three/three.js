import * as THREE from 'three'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(75, 600 / 400, .1, 2000);
const light = new THREE.DirectionalLight(0xffffff);
const loader = new THREE.TextureLoader();

export {
    scene,
    renderer,
    camera,
    light,
    loader,
}