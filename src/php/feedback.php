<?

if ($_POST['who'] == 'robot') {
    header('Refresh: 5; URL=https://www.loveng.by');
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1 style="color:red">Ошибка!</h1>
    <p><b>Не отправлено,</b> так как вы являетесь роботом!<br>
    Через 5 секунд вы вернетесь на главную страницу.</body></p>');
} elseif ($_POST['mail'] == true) {
    $mail = $_POST['mail'];
    if ($_POST['name'] == true) {
        $name = $_POST['name'];
    } else {
        $name = 'Отправитель';
    };

    if ($_POST['phone'] == true) {
        $phone = $_POST['phone'];
    } else {
        $phone = 'Телефон';
    };

    $mess = '
    Отправитель: ' . $name . '
    E-mail:' . $mail . '
    Телефон:' . $phone . '

    $email = 'Loveng.by';
    $headers = "From: $email\r\nReply-To: $email" . "\r\n" . "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8";

    mail('vova.lugovczov@mail.ru', 'Форма обратной связи', $mess, $headers);
    header('Refresh: 5; URL=http://www.loveng.by');
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1>Ваше сообщение отправлено!</h1>
    <p>Наши специалисты свяжутся с вами в ближайшее время.<br>
    Через 5 секунд вы вернетесь на главную страницу.</body>');
    $title = 'Сообщение отправелно';
} else {
    header('Refresh: 5; URL=http://www.loveng.by');
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1 class="red">Ошибка отправки сообщения!</h1><p>Проверьте правильность заполненных данных.<br>
    Через 5 секунд вы вернетесь на главную страницу.');
    $title = 'Ошибка!';

};

echo ('<br/><br/>');

?>

<?
include $_SERVER['DOCUMENT_ROOT'] . '/inc/inter';
include $_SERVER['DOCUMENT_ROOT'] . '/inc/footer'; ?>
