<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $world = $data['world'];
    $mailFrom = "info@stk-media.nl";
    $email = $data['email'];
    $contribution = $data['contribution'];
    $contributionProp = $data['contributionProp'];
    $extraInfo = $data['extraInfo'];

    $mailTo = "stephan.kop@outlook.com";
    $headers = "From: ".$mailFrom;
    $subject = "Contribution proposal for world: ".$world;
    $txt = "New contribution from: ".$email.".\n\n"."World:"."\n".$world.".\n\n"."Contribution to:"."\n".$contribution.".\n\n"."Extra contribution info:"."\n".$contributionProp."\n\n"."Message:"."\n".$extraInfo;

    mail($mailTo, $subject, $txt, $headers, "-f".$email);
    echo 'Mail sent.';
}