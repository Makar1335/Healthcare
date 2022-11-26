import { Legend } from "recharts";
import { Tooltip, YAxis } from "recharts";
import { Line, LineChart, XAxis,CartesianGrid} from "recharts";


const data = [
    {name: "2020-1", react: 32, vue: 60},
    {name: "2020-2", react: 42, vue: 54},
    {name: "2020-3", react: 51, vue: 54},
    {name: "2020-4", react: 60, vue: 28},
    {name: "2020-5", react: 51, vue: 27},
    {name: "2020-6", react: 95, vue: 49},
    {name: "2020-7", react: 32, vue: 60},
    {name: "2020-8", react: 42, vue: 54},
    {name: "2020-9", react: 51, vue: 54},
    {name: "2020-10", react: 60, vue: 28},
    {name: "2020-11", react: 51, vue: 27},
    {name: "2020-12", react: 90, vue: 58},
]

const RechartsExampleMain = () => {
    return (
        <div>
           <LineChart width={1200} height={300} data={data}>
                <Line type="monotone" dataKey='react' stroke="#2196F3" strokeWidth={3}></Line>
                <Line type="monotone" dataKey='vue' stroke="#FAC032" strokeWidth={3}></Line>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
           </LineChart>
        </div>
    )
}

export default RechartsExampleMain;
