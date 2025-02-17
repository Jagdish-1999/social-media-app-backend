const OTPSchema = {
	type: "object",
	properties: {
		userId: {
			type: "string",
			example: "67ae2cc503577161edc3f8b4",
			required: true,
		},
		otp: {
			type: "number",
			example: 879320,
			required: true,
		},
		isValidOTP: {
			type: "boolean",
			example: false,
			default: false,
		},
	},
};

export default OTPSchema;
