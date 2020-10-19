<template>
 <themecleanflex-components-block v-bind:model="model">
   <iframe src="" style="position: relative; width: 100%; height: 80vh;"
    id="api-frame" allow="autoplay; fullscreen; vr" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
 </themecleanflex-components-block>
</template>


<script>
    export default {
        props: ['model'],
        name: '3Dviewer',
        data() {
          return {
            viewerHtml : null
          }
        },
        mounted(){
            var iframe = document.getElementById( 'api-frame' );
            // var uid = '37455154695e4267a3d6f205b5443aa4';    
            var uid = '1c992c0fbafe410ab9183bd90e481567';
            // By default, the latest version of the viewer API will be used.
            var client = new Sketchfab( iframe );    
            // Alternatively, you can request a specific version.
            // var client = new Sketchfab( '1.8.2', iframe );
            
            client.init( uid, {
                success: function onSuccess( api ){
                    api.start();
                    api.addEventListener( 'viewerready', function() {
                        // API is ready to use
                        // Insert your code here
                        console.log( 'Viewer is ready' );
                    } );
                },
                error: function onError() {
                    console.log( 'Viewer error' );
                }
            } );
        },
        computed :{
          resourceHTLPath(){
            return $peregrineApp.getView().page.pagePath + this.model.path + ".html"
          }
        }
    }
</script>