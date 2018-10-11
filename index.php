<?php
/**
 * Created by PhpStorm.
 * User: Chrobak
 * Date: 11.10.2018
 * Time: 14:30
 * -----------------------------------------------------------------------------
 * # include controller
 */
include_once 'controller/Home.Controller.php';
/** 
* # get instance
*/
$controller = new HomeController();
/** 
* # get view object
*/
$view = $controller->getView();
/** 
* # set view
*/
include_once 'view/main.tpl.php';