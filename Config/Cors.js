module.exports = (req, res, next) => {
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
}