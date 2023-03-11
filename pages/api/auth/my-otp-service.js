import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';

const OTP_LENGTH = 6;
const OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Map of phone numbers to OTPs and expiry times
const otpMap = new Map();

function generateOTP(phoneNumber) {
  const otp = otpGenerator.generate(OTP_LENGTH, {
    digits: true,
    alphabets: false,
    upperCase: false,
  });
  const expiryTime = Date.now() + OTP_EXPIRY_TIME;
  otpMap.set(phoneNumber, { otp, expiryTime });
  return otp;
}

async function sendOTP(phoneNumber) {
  const otp = generateOTP(phoneNumber);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${phoneNumber}@sms.domain.com`, // replace with the appropriate SMS gateway domain for your region
    subject: 'Your OTP for My App',
    text: `Your OTP for My App is ${otp}. This code will expire in 5 minutes.`,
  };
  await transporter.sendMail(mailOptions);
}

async function verifyPhoneNumber(phoneNumber, otpCode) {
  const otpData = otpMap.get(phoneNumber);
  if (!otpData) {
    return false;
  }
  if (otpData.expiryTime < Date.now()) {
    return false;
  }
  if (otpData.otp !== otpCode) {
    return false;
  }
  otpMap.delete(phoneNumber);
  return true;
}

export { sendOTP, verifyPhoneNumber };
