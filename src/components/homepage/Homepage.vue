<template>

    <div class="webgl" data-webgl=""></div>

    <div class="home_header">

        <div class="home_header_content">
            <h1>EBUS Suite</h1>
            <div class="divider"></div>
            <h2>Welcome to the most advanced Automatic Vehicle Management System</h2>
        </div>

        <div class="block_grid">

            <h2>We provide solutions for</h2>

            <div class="box" data-navto="scene1">
                <span>On-board Systems</span>
            </div>

            <div class="box" data-navto="scene2">
                <span>Infomobility</span>
            </div>

            <div class="box" data-navto="scene3">
                <span>Central Software</span>
            </div>

            <div class="box" data-navto="scene4">
                <span>Reports / Data Analysis</span>
            </div>

        </div>
    </div>

</template>

<script>

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';



const scene0 = {
    cameraX: 0,
    cameraY: 400,
    cameraZ: 0,

    cameraRX: Math.PI / 2,
    cameraRY: 0,
    cameraRZ: 0,

    objectX: 0,
    objectY: 0,
    objectZ: 0
}

const scene1 = {
    cameraX: -110,
    cameraY: 40,
    cameraZ: 110,

    objectX: -60,
    objectY: 0,
    objectZ: 60
}

const scene2 = {
    cameraX: -110,
    cameraY: 40,
    cameraZ: -110,

    objectX: -60,
    objectY: 0,
    objectZ: -60
}

const scene3 = {
    cameraX: 110,
    cameraY: 40,
    cameraZ: -110,

    objectX: 60,
    objectY: 0,
    objectZ: -60
}

const scene4 = {
    cameraX: 110,
    cameraY: 40,
    cameraZ: 110,

    objectX: 60,
    objectY: 0,
    objectZ: 60
}


export default {
    data() {
        return {
            basecolor: 0xfafafa
        }
    },
    mounted() {
        this.init();
        this.animate();
    },

    methods: {

        init() {

            // Scene
            this.scene = new THREE.Scene()
            this.scene.background = new THREE.Color( this.basecolor );
            this.scene.fog = new THREE.FogExp2( this.basecolor, 0.005 );

            this.renderer = new THREE.WebGLRenderer( { antialias: true } );
            this.renderer.setPixelRatio( window.devicePixelRatio );

            let parent = document.querySelector('[data-webgl]');
            let pWidth = parent.offsetWidth
            let pHeight = parent.offsetHeight

        	this.renderer.setSize( pWidth, pHeight );


            this.clock = new THREE.Clock();

            document.querySelector('[data-webgl]').appendChild( this.renderer.domElement );

            this.camera = new THREE.PerspectiveCamera( 35, pWidth / pHeight, 1, 1000 );

            this.camera.position.set(
                scene0.cameraX,
                scene0.cameraY,
                scene0.cameraZ
            );

            this.camera.rotation.set(
                scene0.cameraRX,
                scene0.cameraRY,
                scene0.cameraRZ
            );

            this.initialCamera = {
                x: this.camera.rotation.x,
                y: this.camera.rotation.y,
                z: this.camera.rotation.z
            };


            // controls
        	this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        	// controls.listenToKeyEvents( window ); // optional
            // controls.enabled = false;
            this.controls.autoRotate = false;
            this.controls.autoRotateSpeed = 0.5;

        	//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        	this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        	this.controls.dampingFactor = 0.05;

        	this.controls.screenSpacePanning = false;

        	this.controls.minDistance = 50;
        	this.controls.maxDistance = 500;

        	this.controls.maxPolarAngle = Math.PI / 2.5;

            this.controls.target.set(
                scene0.objectX,
                scene0.objectY,
                scene0.objectZ
            );


            // LOAD 3D ELEMENTS

            const loader = new GLTFLoader()

            loader.load(
            	'/3d/vehicles.glb',

            	( gltf ) => {
                    let gltfPos = {
                        x: scene1.objectX,
                        y: scene1.objectY,
                        z: scene1.objectZ
                    };
                    this.wireframize(gltf, gltfPos)

            	},
            	// called while loading is progressing
            	( xhr ) => {
            		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            	},
            	// called when loading has errors
            	( error ) => {
            		console.log( error );
            	}
            );

            loader.load(
            	'/3d/stop.glb',

            	( gltf ) => {
                    let gltfPos = {
                        x: scene2.objectX,
                        y: scene2.objectY,
                        z: scene2.objectZ
                    };
                    this.wireframize(gltf, gltfPos)
            	},
            	// called while loading is progressing
            	( xhr ) => {
            		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            	},
            	// called when loading has errors
            	( error ) => {
            		console.log( error );
            	}
            );

            loader.load(
            	'/3d/office.glb',

            	( gltf ) => {
                    let gltfPos = {
                        x: scene3.objectX,
                        y: scene3.objectY,
                        z: scene3.objectZ
                    };
                    this.wireframize(gltf, gltfPos)
            	},
            	// called while loading is progressing
            	( xhr ) => {
            		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            	},
            	// called when loading has errors
                ( error ) => {
            		console.log( error );
            	}
            );

            loader.load(
            	'/3d/data.glb',

            	( gltf ) => {
                    let gltfPos = {
                        x: scene4.objectX,
                        y: scene4.objectY,
                        z: scene4.objectZ
                    };
                    this.wireframize(gltf, gltfPos)

            	},
            	// called while loading is progressing
            	( xhr ) => {
            		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            	},
            	// called when loading has errors
            	( error ) => {
            		console.log( error );
            	}
            );

        	window.addEventListener( 'resize', ()=>{
                this.onWindowResize()
            } );

            this.flyToScene(scene1);

            this.navigation();
            this.particles();

        },

        wireframize(gltf, gltfPos) {

            let objectScene = gltf.scene
            let objectGroup = objectScene.children

            let sceneGroup = new THREE.Group()

            objectGroup.forEach((object, i) => {

                var objectGroupBase = object.clone();
                objectGroupBase.traverse(node => {
                    // if (!node.isMesh) return;
                    node.material = new THREE.MeshBasicMaterial({
                        color: this.basecolor
                    });
                })

                object.traverse(node => {
                    // if (!node.isMesh) return;
                    node.material = new THREE.MeshBasicMaterial({
                        color: 0x0072ff,
                        wireframe: true,
                        transparent: true,
                        opacity: 1
                    });
                });

                var newObject = new THREE.Object3D();

                newObject.add(object);
                newObject.add(objectGroupBase);

                newObject.position.set(gltfPos.x, gltfPos.y, gltfPos.z);

                sceneGroup.add(newObject)
            });

            this.scene.add( sceneGroup );
        },

        animate() {
            requestAnimationFrame( this.animate );

            this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

            this.render();
        },

        render() {
        	this.renderer.render( this.scene, this.camera );
        },

        onWindowResize() {
        	this.camera.aspect = window.innerWidth / window.innerHeight;
        	this.camera.updateProjectionMatrix();
        	this.renderer.setSize( window.innerWidth, window.innerHeight );
        },

        navigation() {
            document.querySelectorAll('[data-navto]').forEach((item, i) => {

                item.addEventListener('click', () => {
                    this.controls.enabled = false;

                    this.controls.autoRotate = true;


                    let navToTarget = item.getAttribute('data-navto')

                    let sceneView

                    if(navToTarget === 'scene0') {
                        sceneView = scene0
                        this.controls.autoRotate = false;
                    }
                    if(navToTarget === 'scene1') {
                        sceneView = scene1
                    }
                    if(navToTarget === 'scene2') {
                        sceneView = scene2
                    }
                    if(navToTarget === 'scene3') {
                        sceneView = scene3
                    }
                    if(navToTarget === 'scene4') {
                        sceneView = scene4
                    }

                    this.flyToScene(sceneView)

                })
            });
        },

        flyToScene(sceneId) {
            let tl = gsap.timeline()

            tl.to(
                this.camera.position, {
                    duration: 5,
                    ease: 'expo',
                    x: sceneId.cameraX,
                    y: sceneId.cameraY,
                    z: sceneId.cameraZ,
                    onUpdate: ()=> {
                        this.controls.update();
                        this.controls.autoRotate = true;
                    },
                    onComplete: ()=> {
                        this.controls.enabled = true;
                    }
                }
            );

            tl.to(
                this.controls.target, {
                    duration: 5,
                    ease: 'expo',
                    x: sceneId.objectX,
                    y: sceneId.objectY,
                    z: sceneId.objectZ,
                    onUpdate: ()=> {
                        this.controls.update();
                    },
                    onComplete: ()=> {
                        this.controls.enabled = true;
                    }
                }, '<'
            );

            if (sceneId === 'scene0') {

                tl.to(
                    this.camera.rotation, {
                        duration: 2,
                        ease: 'expo',
                        x: this.initialCamera.x,
                        y: this.initialCamera.y,
                        z: this.initialCamera.z,
                        // y: sceneView.cameraRY,
                        // z: sceneView.cameraRZ,
                        onUpdate: ()=> {
                            this.controls.update();
                        },
                        onComplete: ()=> {
                            this.controls.enabled = false;
                        }
                    }, 5
                );
            }
        },

        particles() {
            // create the particle variables
            let particleCount = 1300;

            // now create the individual particles
            for (var p = 0; p < particleCount; p++) {

              // create a particle with random
              // position values, -250 -> 250
                let pX = Math.random() * 500 - 250;
                let pY = Math.random() * 500 - 250;
                let pZ = Math.random() * 500 - 250;

                let size = Math.random() * 5;

                let geometry = new THREE.BoxGeometry( size, size, size );
                let material = new THREE.MeshBasicMaterial( {
                    color: 0x0072ff,
                    opacity: Math.random(),
                    transparent: true
                } );

                let particle = new THREE.Mesh( geometry, material );

                particle.position.set(pX, pY, pZ)

                let tl = gsap.timeline({ repeat: -1, repeatDelay: (Math.random() * 10) + 3 });

                let rX = particle.rotation.x
                let rY = particle.rotation.y
                let rZ = particle.rotation.z

                tl.to(particle.rotation, {
                    x: rX + Math.PI / 2
                }, Math.random() * 10)

                tl.to(particle.rotation, {
                    y: rY + Math.PI / 2
                }, Math.random() * 10)

                tl.to(particle.rotation, {
                    z: rZ + Math.PI / 2
                }, Math.random() * 10)

                this.scene.add(particle)

                // add it to the geometry
            }

        }

    }
}

</script>
