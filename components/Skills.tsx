import OrbitingCircles from "@/components/ui/orbiting-circles";

const Skills = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-bodyColor bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white ">
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <span className="text-2xl">3D drawing</span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <span className="text-2xl">3D rendering</span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <span className="text-2xl">Sketchup</span>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <span className="text-2xl">2D drawing</span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <span className="text-2xl">V-Ray</span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={25}
        reverse
      >
        <span className="text-2xl">Logo design</span>
      </OrbitingCircles>

      {/* New Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={220}
        duration={25}
        delay={10}
        
      >
        <span className="text-2xl">Autocad 2D</span>
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={220}
        duration={25}
        delay={20}
        
      >
        <span className="text-2xl">Lumion rendering</span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={220}
        duration={25}
        delay={30}
        
      >
        <span className="text-2xl">Adobe Photoshop</span>
      </OrbitingCircles>

    </div>
  );
};

export default Skills;
