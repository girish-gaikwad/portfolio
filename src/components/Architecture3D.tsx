'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Float, Grid, Text, Line } from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'

// Muted, utilitarian color palette
const COLORS = {
  text: '#a1a1aa', // zinc-400
  dim: '#3f3f46', // zinc-700
  accent: '#52525b', // zinc-600
  alert: '#71717a', // zinc-500
  bg: '#000000',
  gridMain: '#27272a', // zinc-800
  gridSub: '#18181b', // zinc-900
}

interface NodeProps {
  position: [number, number, number]
  label: string
  color: string
  type?: 'box' | 'cylinder' | 'sphere' | 'torus' | 'group'
  scale?: [number, number, number]
  children?: React.ReactNode
}

function Node({ position, label, color, type = 'box', scale = [1, 1, 1], children }: NodeProps) {
  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh scale={scale}>
          {type === 'box' && <boxGeometry />}
          {type === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
          {type === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
          {type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
          
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.2} // Drastically reduced glow
            transparent 
            opacity={0.6}
            wireframe={type === 'torus' || type === 'sphere'} 
          />
        </mesh>
        
        {/* Harsh wireframe box for tech feeling */}
        {type !== 'torus' && (
          <lineSegments scale={[scale[0] * 1.05, scale[1] * 1.05, scale[2] * 1.05]}>
             <edgesGeometry args={[
                type === 'box' ? new THREE.BoxGeometry() : 
                type === 'cylinder' ? new THREE.CylinderGeometry(0.5, 0.5, 1, 8) : 
                new THREE.BoxGeometry() 
             ]} />
             <lineBasicMaterial color={COLORS.text} transparent opacity={0.2} />
          </lineSegments>
        )}
        
        {children}
        
        <Html position={[0, -1.2, 0]} center transform sprite zIndexRange={[100, 0]}>
          <div className="pointer-events-none select-none text-[10px] font-mono tracking-[0.2em] text-zinc-400 bg-black/80 px-2 py-1 border border-zinc-800 whitespace-nowrap uppercase">
            [{label}]
          </div>
        </Html>
      </Float>
    </group>
  )
}

function Connection({ start, end, color = COLORS.dim }: { start: [number, number, number], end: [number, number, number], color?: string }) {
    const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end])
    return (
        <Line points={points} color={color} lineWidth={1} transparent opacity={0.3} dashed dashScale={10} dashSize={1} dashOffset={0} />
    )
}

function WorkerPods({ position }: { position: [number, number, number] }) {
  const pods = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      pods.push(
        <mesh key={`${i}-${j}`} position={[i * 0.8 - 0.8, 0, j * 0.8 - 0.8]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color={COLORS.dim} emissive={COLORS.dim} emissiveIntensity={0.4} />
          <lineSegments scale={[1.1, 1.1, 1.1]}>
             <edgesGeometry args={[new THREE.BoxGeometry(0.3, 0.3, 0.3)]} />
             <lineBasicMaterial color={COLORS.text} transparent opacity={0.1} />
          </lineSegments>
        </mesh>
      )
    }
  }
  return (
    <group position={position}>
        <Float speed={2} rotationIntensity={0.05} floatIntensity={0.1}>
            <group>{pods}</group>
             <Html position={[0, -1.5, 0]} center transform sprite>
                <div className="pointer-events-none select-none text-[10px] font-mono tracking-[0.2em] text-zinc-500 bg-black/80 px-2 py-1 border border-zinc-800/50 whitespace-nowrap">
                    WRK_CLUSTER
                </div>
            </Html>
        </Float>
    </group>
  )
}

export default function Architecture3D() {
  return (
    <div className="w-full h-full min-h-[400px] relative border border-zinc-800 bg-transparent">
      {/* Terminal Overlay UI */}
      <div className="absolute top-0 left-0 right-0 p-2 flex justify-between z-10 font-mono text-[10px] text-zinc-500 pointer-events-none border-b border-zinc-900 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-4">
            <span>DATA_VIZ_SEQ_v3.1</span>
            <span className="text-zinc-400">MEM: 12.4%</span>
        </div>
        <div className="animate-pulse text-zinc-300">ACTV</div>
      </div>
      
      <Canvas camera={{ position: [8, 6, 8], fov: 45 }}>
        <fog attach="fog" args={['#000000', 8, 30]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <spotLight position={[0, 10, 0]} intensity={0.4} color="#ffffff" />

        <group position={[0, -1, 0]}>
            {/* Very dim, dark grid */}
            <Grid 
                renderOrder={-1} 
                position={[0, -0.5, 0]} 
                infiniteGrid 
                cellSize={1} 
                sectionSize={4} 
                fadeDistance={25} 
                sectionColor={COLORS.gridMain} 
                cellColor={COLORS.gridSub} 
            />
            
            {/* Architecture Nodes - Muted Palette */}
            <Node position={[-4, 2, -2]} label="CLIENT_REQ" color={COLORS.text} type="sphere" />
            <Node position={[0, 2, -2]} label="INGRESS_GW" color={COLORS.accent} type="box" scale={[3, 1, 1]} />
            <Node position={[-3, 1, 2]} label="MSG_BROKER" color={COLORS.dim} type="box" scale={[1, 1, 1]} />
            <Node position={[3, 1, 0]} label="EVENT_BUS" color={COLORS.alert} type="torus" />
            
            <WorkerPods position={[0, 0, 3]} />
            
            <Node position={[4, 0, 4]} label="LOG_AGG" color={COLORS.dim} type="cylinder" scale={[1, 1.5, 1]} />

            {/* Connections */}
            <Connection start={[-4, 2, -2]} end={[0, 2, -2]} />
            <Connection start={[0, 2, -2]} end={[-3, 1, 2]} />
            <Connection start={[-3, 1, 2]} end={[0, 0, 3]} />
            <Connection start={[0, 2, -2]} end={[3, 1, 0]} />
            <Connection start={[0, 0, 3]} end={[4, 0, 4]} />
        </group>

        <EffectComposer>
          <Noise opacity={0.03} />
          <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} intensity={0.2} />
        </EffectComposer>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 4} />
      </Canvas>

      {/* Crosshairs & HUD Elements */}
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-zinc-600 pointer-events-none"></div>
      <div className="absolute top-8 right-2 w-4 h-4 border-r border-t border-zinc-600 pointer-events-none"></div>
    </div>
  )
}