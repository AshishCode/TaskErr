var number,name,des;

exports.setNumber = function(num)
{
	number = num;
};
exports.setName = function(o)
{
	name= o;
};
exports.setDes = function(d)
{
	des= d;
};

exports.getInfo = function()

{
		/*var x = {
			this.number = number,
			this.name= name,
			this.des = des
		};*/
		/*this.number = number;
		this.origin = origin;
		this.destination = destination;*/
		//return this.number;
		//return this.destination;
		return {
			number : number,
			name : name,
			des :  des
		}
};