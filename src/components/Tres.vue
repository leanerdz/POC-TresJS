<script lang="ts" setup>
  import { useLoop } from '@tresjs/core'
  import { OrbitControls } from '@tresjs/cientos'
  import { shallowRef } from 'vue'

  // Animation
  const donutRef = shallowRef()
  const { onBeforeRender } = useLoop()
  onBeforeRender(({ delta, elapsed }) => {
         if (donutRef.value) {
           donutRef.value.rotation.y += delta
           donutRef.value.rotation.z = elapsed * 0.2
         }
  })
</script>

<template>
  <!--Caméra-->
  <TresPerspectiveCamera :position="[12, 10, 10]" :look-at="[0, 0, 0]"/>

  <!--Ombres-->
  <TresAmbientLight :intensity="1"/>
    <TresDirectionalLight cast-shadow :position="[0, 2, 0]" :intensity="1"/>

  <!--Donut-->
  <TresMesh ref="donutRef" cast-shadow :position="[2, 0, -2]">
    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
    <TresMeshBasicMaterial color="orange" />
  </TresMesh>

  <!--Sol-->
  <TresMesh receive-shadow :position="[1.5, -4, -2]" :rotation="[-Math.PI / 2, 0, 0]">
    <TresPlaneGeometry :args="[10, 10, 10, 10]" />
    <TresMeshStandardMaterial color="#f7f7f7" />
  </TresMesh>

    <OrbitControls />
</template>

<style> </style>