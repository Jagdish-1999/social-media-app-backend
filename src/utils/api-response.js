export default class ApiResponse {
	constructor(statusCode, message, data = null) {
		this.statusCode = statusCode;
		this.message = message;

		if (data) this.data = data;
	}
}
