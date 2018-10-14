<?php

class HomeController {

    private $view;

    function __construct() {
        $testFilter = (isset($_GET['test'])) ? $_GET['test'] : '';
        $this->view = (object) [
            'title' => 'Chess',
            'template' => 'app',
            'test' => $testFilter
        ];
    }

    public function getView() {
        return $this->view;
    }
}