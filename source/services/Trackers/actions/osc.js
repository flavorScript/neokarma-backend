var timeseries = require("timeseries-analysis");
// John Ehlers iTrend
export default function( TimeSeries, Params = {} )
{
	var t = new timeseries.main(timeseries.adapter.fromDB(TimeSeries, {
		date:   'date',     // Name of the property containing the Date (must be compatible with new Date(date) )
		value:  'value'     // Name of the property containign the value. here we'll use the "close" price.
	}));

	let data = t.osc().output();
	for (var i = 0; i < TimeSeries.length; ++i)
	{
		TimeSeries[i].value = data[i][1];
	}
	return TimeSeries;
}
