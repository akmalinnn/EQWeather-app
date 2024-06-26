const ForecastTable = (props) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Average Temperature</th>
                        <th>Minimum Temperature</th>
                        <th>Maximum Temperature</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {props.dailyForecast.map((dayForecast, index) => {
                        const humanDate = new Date(dayForecast.date)
                            .toISOString()
                            .split("T")[0];

                        return (
                            <tr key={index}>
                                <td>{humanDate}</td>
                                <td>{dayForecast.average_temperature}</td>
                                <td>{dayForecast.minimum_temperature}</td>
                                <td>{dayForecast.maximum_temperature}</td>
                                <td className="flex items-center">
                                <img
                                    src={`https://cdn.weatherbit.io/static/img/icons/${dayForecast.detail_icon}.png`}
                                    className="mr-2"
                                        />
                                    {dayForecast.detail_forecast}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ForecastTable;
