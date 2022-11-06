<?php
    if (isset($_POST['message'])) {
        $retour = mail('maquette.initium@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: visuelium@monsite.fr' . "\r\n" . 'Reply-to: ' . $_POST['email']);
        if($retour)
            echo '<p>Votre message a bien été envoyé.</p>';
    }
    