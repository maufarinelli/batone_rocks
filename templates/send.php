<?php 
    require_once '../swiftmailer/lib/swift_required.php';

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        $email = test_input($_POST["email"]);
        $messageBody = test_input($_POST["message"]);
    }

    // Create the Transport
    $transport = Swift_MailTransport::newInstance();

    // Create the Mailer using your created Transport
    $mailer = Swift_Mailer::newInstance($transport);

    // Create the message
    $message = Swift_Message::newInstance()

      // Give the message a subject
      ->setSubject('Nova mensagem de contato através do site Batone-Rocks')

      // Set the From address with an associative array
      ->setFrom(array($email => $name))

      // Set the To addresses with an associative array
      //->setTo(array('batone.neto@gmail.com', 'batone.neto@gmail.com' => 'Valdir Batone'))
      ->setTo(array('mauricio@farinelliwebdesign.com' => 'Mauricio Receive'))

      // For now CC to me
      //->setBcc(array('maufarinelli@gmail.com', 'maufarinelli@gmail.com' => 'Mauricio Receive'))

      // Give it a body
      ->setBody($messageBody);

    // Send the message
    $result = $mailer->send($message);  

    print $result;
?>