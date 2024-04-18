const { sendEmail } = require("../../helpers");

const needHelp = async (req, res) => {
    const { email, comment } = req.body;
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

module.exports = {
    needHelp,
}