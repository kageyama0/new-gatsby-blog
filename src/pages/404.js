import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as React from "react";
import { useRef, useState } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Layout from "../components/Layout";
import hel_font from "../fonts/helvetiker_regular.typeface.json";

extend({ TextGeometry });

const Sphere = ({ scale, position }) => {
  const mesh = useRef({});
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const X = position[0];
  const Y = position[1];
  const Z = position[2];
  const PI = Math.PI;
  const initTheta = Math.atan(X / Z);
  // console.log(initTheta, PI / 6)

  let type, color;
  if (initTheta < 0) {
    type = "A";
    color = "#4FBDBA";
  } else if (initTheta < PI / 6) {
    type = "B";
    color = "#F7B801";
  } else if (PI / 6 < initTheta < PI / 3) {
    type = "C";
    color = "#583F99";
  }

  // console.log(type);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (type === "A") {
      mesh.current.position.x = X * Math.cos(initTheta + time * 0.3);
      mesh.current.position.y = Y * Math.sin(initTheta + time * 0.3);
      mesh.current.position.z = Z * Math.sin(initTheta + time * 0.3);
    } else if (type === "B") {
      mesh.current.position.x = X * Math.cos(initTheta + time * 0.3);
      mesh.current.position.y = Y * Math.sin(initTheta + time * 0.3);
      mesh.current.position.z = Z * Math.sin(initTheta + time * 0.3);
    } else {
      mesh.current.position.x = X * Math.sin(initTheta + time * 0.3);
      mesh.current.position.y = Y * Math.cos(initTheta + time * 0.3);
      mesh.current.position.z = Z * Math.sin(initTheta + time * 0.3);
    }
  });

  return (
    <mesh
      scale={hovered ? 2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
      position={position}
      ref={mesh}
    >
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </mesh>
  );
};

const Text = ({ text, position }) => {
  const font = new FontLoader().parse(hel_font);
  const mesh = useRef();
  const PI = Math.PI;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.rotation.x = Math.abs((Math.sin(time) * PI) / 12);
    mesh.current.position.y += Math.sin(time) / 240;
  });

  return (
    <mesh position={position} ref={mesh} receiveShadow>
      <textGeometry
        attach="geometry"
        args={[text, { font, size: 1, height: 0.5 }]}
      />
      <meshPhysicalMaterial attach="material" color="grey" />
    </mesh>
  );
};

const NotFoundPage = () => {
  function createSpheres() {
    let spheres = [];
    for (var i = 0; i < 100; i++) {
      var x = 20 * (Math.random() - 0.5);
      var y = 20 * (Math.random() - 0.5);
      var z = 20 * (Math.random() - 0.5);
      spheres[i] = [x, y, z];
    }
    // console.log(spheres);
    return spheres;
  }

  const Spheres = createSpheres().map((cords, i) => (
    <Sphere key={i} scale={0.2} position={cords} />
  ));

  return (
    <Layout>
      <Box width={{ base: "100vw", lg: "auto" }} height="100vh" zIndex="-999">
        <Canvas camera={{ position: [0, 0, 6] }} shadows>
          <Text text="404" position={[-2, 2, 0]} />
          <Text text="Not Found" position={[-4, -0.5, 0]} />

          {Spheres}

          <spotLight intensity={0.2} position={[10, 10, 5]} castShadow />
          <directionalLight position={[0, -3, 5]} intensity={0.5} castShadow />
          <OrbitControls />
        </Canvas>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
