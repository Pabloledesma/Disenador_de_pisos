<!-- Todos los patrones -->
<style>
    .paleta { 
        margin-top: 5px;
        width: 30px !important;
        height: 30px;
        border-radius: 10px;
        border: none;
        -webkit-box-shadow: 2px 2px 5px black;
        box-shadow: 2px 2px 5px black;
    }

    .selected { 
        width: 90px !important;
        height: 30px;
        border-radius: 10px;
        border: none !important; 
        background:#E5A7A5;
        margin-top: 10px;

    }

</style>
<div id="disenador" class="container">
    <div class="row">
        <div id="all" class="col-md-12">
            <!-- En esta sección van todos los patrones -->
            <h4>Seleccióne la valdosa que desee editar</h4>
            <?php
                $dir_imagenes = plugins_url('Disenador_de_pisos/img/');
                $imagenes = scandir( str_replace('partials', 'img', __DIR__) );
                foreach($imagenes as $img){
                    if( strpos($img, '.svg') ){
            ?>
            <a href="<?php echo $dir_imagenes . $img; ?>"><img src="<?php  echo $dir_imagenes . $img; ?>" width="50"/></a>
            <?php
                    }
                }
            ?>
            
        </div>
    </div>
    <div class="row">
        <div class="col-md-3" id="paleta">

            <input type="button" class="paleta" id="#1F1C26" style="background-color:#1F1C26 ; "/>
            <input type="button" class="paleta" id="#432362" style="background-color:#432362; "/>
            <input type="button" class="paleta" id="#274861" style="background-color:#274861 ; "/>
            <input type="button" class="paleta" id="#395241" style="background-color:#395241; "/>
            <input type="button" class="paleta" id="#C2923C" style="background-color:#C2923C ; "/>
            <input type="button" class="paleta" id="#C35F36" style="background-color:#C35F36 ; "/>
            <input type="button" class="paleta" id="#943034" style="background-color:#943034 ; "/><br>
            <input type="button" class="paleta" id="#585A5B" style="background-color:#585A5B ; "/>
            <input type="button" class="paleta" id="#67357C" style="background-color:#67357C ; "/>
            <input type="button" class="paleta" id="#1C4DA1" style="background-color:#1C4DA1 ; "/>
            <input type="button" class="paleta" id="#549257" style="background-color:#549257 ; "/>
            <input type="button" class="paleta" id="#D39E42" style="background-color:#D39E42 ; "/>
            <input type="button" class="paleta" id="#D4673B" style="background-color:#D4673B ; "/>
            <input type="button" class="paleta" id="#B0434B" style="background-color:#B0434B ; "/><br>
            <input type="button" class="paleta" id="#818589" style="background-color:#818589 ; "/>
            <input type="button" class="paleta" id="#8996C4" style="background-color:#8996C4 ; "/>
            <input type="button" class="paleta" id="#3F87AA" style="background-color:#3F87AA ; "/>
            <input type="button" class="paleta" id="#4B977C" style="background-color:#4B977C ; "/>
            <input type="button" class="paleta" id="#E1BC7F" style="background-color:#E1BC7F ; "/>
            <input type="button" class="paleta" id="#D67F5A" style="background-color:#D67F5A ; "/>
            <input type="button" class="paleta" id="#E28385" style="background-color:#E28385 ; "/><br>
            <input type="button" class="paleta" id="#C4C6C7" style="background-color:#C4C6C7 ; "/>
            <input type="button" class="paleta" id="#FFFFFF" style="background-color:#FFFFFF ; "/>
            <input type="button" class="paleta" id="#74B9E6" style="background-color:#74B9E6 ; "/>
            <input type="button" class="paleta" id="#B6CDAE" style="background-color:#B6CDAE ; "/>
            <input type="button" class="paleta" id="#9C4F2F" style="background-color:#9C4F2F ; "/>
            <input type="button" class="paleta" id="#E5A7A5" style="background-color:#E5A7A5 ; "/>
            
        </div>
        <div class="col-md-2">
            <h4>Color seleccionado.</h4>
            <input type="button" class="selected" id="selected" />
            <div class="botones">
                <button class="btn-primary" id="guardar">Guardar</button>
                <button class="btn-primary" id="borrar">Borrar</button>
            </div>
        </div>
        <div id="detalle" class="col-md-7">
           

</div><!-- #detalle -->
</div>
<div class="row">
    <div class="col-md-6">
       
    </div>
    <div class="col-md-6" id="result">                  
    </div>
</div>
</div>      

<script src="<?php echo site_url('wp-content/plugins/Disenador_de_pisos/js/disenador_de_pisos.js'); ?>"></script>


