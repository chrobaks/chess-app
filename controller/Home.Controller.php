<?php

class HomeController {

    private $view;

    function __construct() {
        $this->view = (object) [
            'title' => 'Chess',
            'template' => 'app'
        ];
    }

    public function getView() {
        return $this->view;
    }
}