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
    //Quitar el los estilos del div entry-content
    $("div[class='entry-content]").removeClass('entry-content');
    
    all.on('click', 'a', function(e){
        e.preventDefault();
        detalle.load( $(this).attr('href'), function(){
            console.log('nuevo');
            var group = $('g');
            console.log(group.html());
            group.on('click', 'poligon', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'circle', function(){
                $(this).attr('fill', color);
            });
            
            group.on('click', 'rectangle', function(){
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
        $("#result").find("svg").remove();
    });
    
     
});


