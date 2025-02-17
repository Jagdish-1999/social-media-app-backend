import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SMTP_USER_EMAIL,
		pass: process.env.SMTP_PASSWORD
	}
});

const sendOTPOnMail = async (mailOptions) => {
	return await transporter.sendMail(mailOptions);
};

const generateOTP = () => {
	return Math.round(100000 + Math.random() * 900000);
};

export { sendOTPOnMail, generateOTP };
