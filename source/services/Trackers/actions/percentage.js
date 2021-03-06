// Calculates percentage increase between 2 points
export default function( TimeSeries, Params = {} )
{
	TimeSeries[0].value = 0;
	let TimeSeriesResult = [TimeSeries[0]];
	for(var i= TimeSeries.length - 1;i>1;--i)
	{
		let Increase = TimeSeries[i].value - TimeSeries[i - 1].value;
		
		TimeSeries[i].value = (TimeSeries[i].value / Increase) * 100;
	}
	
	return TimeSeries;
}
