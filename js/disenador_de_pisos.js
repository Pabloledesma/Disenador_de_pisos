/* 
 * Author: Pablo Ledesma
 * Contact: pabloledes83@gmail.com
 */

$().ready(function () {
    var selected = $("#selected");
    var color;
    var angulo = 0;
    var all = $("#all");
    var detalle = $("#detalle");
    var result = $("#result");

    

    //Reduce la margen izquierda y oculta el texto basura
    //Esto aplica para la plantilla twanty-thirteen
    $("#disenador").parent('.entry-content').removeClass('entry-content').find('p').hide();

    //Oculta el texto basura

    
    all.on('click', 'a', function(e){
        e.preventDefault();
        detalle.load( $(this).attr('href'), function(){
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

    $("#guardar").on('click', function () {
        var svg = $("svg");
        if(result.has('svg').length){
            alert("Debe borrar el resultado anterior.");
            return false;
        }
           
        for (var i = 6; i >= 0; i--) {
            svg.clone().attr('width', '100px')
                    .attr('height', '100px')
                    .attr('class', 'clone')
                    .appendTo("#result");
            i--;
        }
    });

    $("#borrar").on('click', function () {
        $("path").attr('fill', "#FFFFFF");
        $("polygon").attr('fill', "#FFFFFF");
        $("polyline").attr('fill', "#FFFFFF");
        $("rectangle").attr('fill', "#FFFFFF");
        $("circle").attr('fill', "#FFFFFF");
        result.find("svg").remove();
    });
    
     
});


