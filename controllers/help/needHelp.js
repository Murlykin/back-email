const { sendEmail } = require("../../helpers");

const needHelp = async (req, res) => {
    const { email} = req.body;
    const helpEmail = {
        to: "arossmariupol@gmail.com",
        subject: `Client registration from email ${email}`,
        html: `<h2> Client registration</h2>
            <p>Mail for reply ${email}</p>`,
    };

    await sendEmail(helpEmail);

    res.status(200).json({
        message: "Email send",
    });
};

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    // const user = await User.findOne({ email });
    // if (!user) {
    //     throw HttpError(401, "Email not found");
    // }
    // if (user.verify) {
    //     throw HttpError(401, "Email already verified");
    // }

    const verifyEmail = {
        to: email,
        subject: "Email Verification",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PYour application has been accepted, we are waiting for you at our seminar</title>
  <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
</head>

<body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
  <table role="presentation"
    style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(235, 243, 212);">
    <tbody>
      <tr>
        <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
          <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
            <tbody>
              <tr>
                <td style="padding: 40px 0px 0px;">
                  <div style="text-align: right;">
                    <div style="padding-bottom: 20px;"><img
                        src="" alt="Seminar"
                        style="width: 80px;"></div>
                  </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>`,
    };

    await sendEmail(verifyEmail);

    res.json({
        message: "Verify email sent success",
    });
};


module.exports = {
    needHelp, resendVerifyEmail
}