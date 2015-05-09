<?php
/*
  Plugin Name: Diseñador de pisos
  Plugin URI: 
  Description: Agrega color a las valdosas
  Author: Pablo Ledesma
  Author URI: http://pabloledesma.co
  Version: 1.0
 */

add_shortcode('disenador', function(){
    return include 'disenador.php';
});



