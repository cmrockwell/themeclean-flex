<template>
 <themecleanflex-components-block v-bind:model="model">
    <div id='mySpriteSpin'></div>
 </themecleanflex-components-block>
</template>


<script>
    export default {
        props: ['model'],
        mounted(){
          console.log('running spinner')
            $("#mySpriteSpin").spritespin({
            // path to the source images.
            source: [
            "/content/lsa/assets/ummaa/SpinSetExample/frame_001.png",
            "/content/lsa/assets/ummaa/SpinSetExample/frame_002.png",
            "/content/lsa/assets/ummaa/SpinSetExample/frame_003.png",
            "/content/lsa/assets/ummaa/SpinSetExample/frame_004.png",
            "/content/lsa/assets/ummaa/SpinSetExample/frame_005.png",
            "/content/lsa/assets/ummaa/SpinSetExample/frame_006.png",
            ],
            width   : 480,  // width in pixels of the window/frame
            height  : 327,  // height in pixels of the window/frame
            animate : false,
        });
        }
    }
</script>