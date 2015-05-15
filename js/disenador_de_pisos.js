/* 
 * Author: Pablo Ledesma
 * Contact: pabloledes83@gmail.com
 */

$().ready(function () {

    /*** definición de variables ***/

    var selected = $("#selected"),
        color,
        angulo = 0,
        all = $("#all"),
        detalle = $("#detalle"),
        result = $("#result"),
        disenador = $("#disenador"),
        guardar = $("#guardar"),
        borrar = $("#borrar"),
        botones = $("#botones"),
        tabResult = $("table.result"),
        div_cotizacion = $("#cotizacion"),
        btn_cotizar = $("#cotizar"),
        cenefa = $("#cenefa");

        tabResult.slideToggle();
        botones.hide();

    //Reduce la margen izquierda y oculta el texto basura
    //Esto aplica para la plantilla twanty-thirteen
    disenador.parent('.entry-content').removeClass('entry-content').find('p').hide();
    //alert(disenador.parent('div').text());

    //Oculta el texto basura

    
    all.on('click', 'a', function(e){
        e.preventDefault();
        detalle.load( $(this).attr('href') + ' svg', function(){
            var group = $('g');
            group.on('click', 'polygon', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'polyline', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'circle', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'rectangle', function(){
                $(this).attr('fill', color);
            });

             group.on('click', 'rect', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'path', function () {
                
                $(this).attr('fill', color);
            });

            botones.show("slow");
        });
        
    });
    
    $("#paleta").delegate('input.paleta', 'click', function () {
        color = $(this).css('background-color');
        selected.css('background-color', color);
    });

    $("#result").delegate('svg', 'click', function () {
        //Rotar 90°
        angulo += 90;
        var str = angulo.toString();
        $(this).css('-webkit-transform', "rotate(" + str + "deg)")
                .css('-moz-transform', "rotate(" + str + "deg)")
                .css('transform', "rotate(" + str + "deg)");

    });

    guardar.on('click', function () {
        var svg = $("svg");
        if(result.has('svg').length){
            alert("Debe borrar el resultado anterior.");
            return false;
        }
        
        svg.clone().attr('width', '100px')
                .attr('height', '100px')
                .attr('class', 'clone')
                .appendTo("td.celda");
        tabResult.show("slow");
         
    });

    borrar.on('click', function () {
        $("path").attr('fill', "#FFFFFF");
        $("polygon").attr('fill', "#FFFFFF");
        $("polyline").attr('fill', "#FFFFFF");
        $("rect").attr('fill', "#FFFFFF");
        $("circle").attr('fill', "#FFFFFF");
        tabResult.slideToggle("slow");
        result.find("svg").remove();
        
    });
    
     
});


